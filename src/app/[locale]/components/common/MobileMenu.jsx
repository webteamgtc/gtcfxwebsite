"use client";

import { Fragment, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLogin } from "react-icons/md";
import { useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { RxCross2 } from "react-icons/rx";

const isExternal = (href = "") => /^https?:\/\//i.test(href);

export default function MobileMenu(props) {
  const { navigationData } = props;
  const router = useRouter();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("navigation");

  useEffect(() => setMounted(typeof document !== "undefined"), []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const close = () => setOpen(false);

  const menuContent = (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-hidden
        onClick={close}
      />

      {/* Slide-in panel: full viewport height, safe-area aware, scrollable */}
      <div
        className={`fixed top-0 left-0 z-[9999] w-[92%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${open ? "translate-x-0" : "-translate-x-full"}`}
        style={{
          height: "100dvh",
          minHeight: "-webkit-fill-available",
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
        <div className="flex flex-row items-center justify-between p-4 border-b border-gray-200 shrink-0">
          <p className="flex flex-row gap-2 items-center text-lg font-semibold text-[#1a2256]">
            <GiHamburgerMenu size={22} />
            Menu
          </p>
          <button
            type="button"
            className="p-2 rounded-lg text-[#1a2256] hover:bg-gray-100 transition-colors"
            onClick={close}
            aria-label="Close menu"
          >
            <RxCross2 size={24} />
          </button>
        </div>

        <div className="flex flex-row justify-center gap-3 items-center p-3 border-b border-gray-200 shrink-0">
          <Link
            href="https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase border border-[#29a643] hover:bg-[#1a2256] hover:text-white hover:border-[#1a2256] text-[11px] px-3 py-2 rounded-lg transition-colors"
            onClick={close}
          >
            {t("tobbar.account")}
          </Link>
          <Link
            href="/introductory-broker"
            className="uppercase border border-[#956E42] hover:bg-[#1a2256] hover:text-white hover:border-[#1a2256] text-[11px] px-3 py-2 rounded-lg text-[#956E42] transition-colors"
            onClick={close}
          >
            {t("tobbar.rgister")}
          </Link>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
          <ul className="p-0 list-none">
            {navigationData?.map((item, index) => (
            <li key={index}>
              <details className="group">
                <summary className="flex items-center w-full cursor-pointer border-b border-gray-200 py-4 px-4 text-sm font-medium text-[#1a2256] hover:bg-[#F8F6F3] hover:text-[#956E42] transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {item?.title}
                </summary>
                <div className="bg-gray-50">
                  {item?.links?.map((row, rowIndex) => (
                    <Fragment key={rowIndex}>
                      {row?.title && (
                        <h3 className="flex gap-2 items-center text-[15px] font-semibold text-[#956E42] border-b border-gray-200 px-4 py-3">
                          {row.icon && <span className="text-[#1a2256]">{row.icon}</span>}
                          {row.title}
                        </h3>
                      )}
                      {row?.items?.map((value, itemIndex) => {
                        if (!value?.locale?.includes(locale)) return null;
                        if (isExternal(value?.href)) {
                          return (
                            <a
                              key={itemIndex}
                              href={value.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full text-left px-6 py-3 border-b border-gray-100 text-sm text-[#1a2256] hover:bg-white hover:text-[#956E42] transition-colors"
                              onClick={close}
                            >
                              {value?.label}
                            </a>
                          );
                        }
                        return (
                          <button
                            key={itemIndex}
                            type="button"
                            className="block w-full text-left px-6 py-3 border-b border-gray-100 text-sm text-[#1a2256] hover:bg-white hover:text-[#956E42] transition-colors"
                            onClick={() => {
                              router.push(value?.href, { locale });
                              close();
                            }}
                          >
                            {value?.label}
                          </button>
                        );
                      })}
                    </Fragment>
                  ))}
                </div>
              </details>
            </li>
          ))}
          <li className="p-4 border-t border-gray-200">
            <a
              href="https://mygtcfx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center justify-center w-full py-3 rounded-lg text-sm font-medium bg-[#1a2256] text-white hover:bg-[#956E42] transition-colors"
              onClick={close}
            >
              <MdOutlineLogin size={20} />
              {t("new_client_portal")}
            </a>
          </li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-lg p-2.5 bg-white/10 hover:bg-white/20 text-black border border-white/20 transition-colors"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <GiHamburgerMenu size={22} />
      </button>
      {mounted && createPortal(menuContent, document.body)}
    </>
  );
}
