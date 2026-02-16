"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import MobileMenu from "./MobileMenu";
import { useParams, usePathname } from "next/navigation";
import { LiaBoxesSolid } from "react-icons/lia";
import { RiStockLine, RiGlobalLine } from "react-icons/ri";
import { IoMdLaptop } from "react-icons/io";
import { BsBarChart } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWbSunny, MdOutlineManageAccounts, MdOutlineDownload } from "react-icons/md";
import { TbDownload } from "react-icons/tb";

import { FiBriefcase, FiGitPullRequest } from "react-icons/fi";
import { BiAnalyse, BiSpeaker } from "react-icons/bi";
import TopBar from "./Topbar";
import { Link, useRouter } from "@/i18n/navigation";
import { getAboutUsContent, getAccountContent, getPartnerContent, getTechContent, getTradingContent, Star } from "./CommonComponentUtil";

const isExternal = (href = "") => /^https?:\/\//i.test(href);






const NavItem = ({ title, href, locale, links, id, show, setShow }) => {
    const pathname = usePathname();
    const urlLocale = useLocale();
    const pathnameWithoutLocale = pathname.replace(`/${urlLocale}`, "");
    const isAr = pathname.includes("/ar");
    const innerActive = links?.some((single) => single?.items?.some((x) => x?.href === pathnameWithoutLocale));
    const isActive = pathnameWithoutLocale == href || innerActive;
    const isOpen = show === id;

    return (
        <li>
            <button
                type="button"
                onClick={() => setShow(isOpen ? "" : id)}
                className={`
                    block cursor-pointer py-5 px-3 lg:px-4 rounded-lg text-sm font-medium transition-all duration-200
                    ${isAr ? "pr-3 lg:pr-4 pl-3 lg:pl-4" : "pl-3 lg:pl-4 pr-3 lg:pr-4"}
                    ${isActive ? "text-secondary" : "text-black/95 hover:text-black/95 hover:bg-white/10"}
                    ${isOpen ? "text-black/95 bg-white/10" : ""}
                `}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {title}
            </button>
        </li>
    );
};

/** Dropdown panel below the nav - matches design: deep blue, 4 columns (intro + link groups), decorative bg. */
function MegamenuDropdown({ open, onClose, navTitle, description, links, locale, pathnameWithoutLocale, isAr }) {
    const [mounted, setMounted] = useState(false);
    const [closing, setClosing] = useState(false);
    const panelRef = useRef(null);

    useEffect(() => {
        if (open) {
            setClosing(false);
            const t = requestAnimationFrame(() => setMounted(true));
            return () => cancelAnimationFrame(t);
        } else {
            setMounted(false);
        }
    }, [open]);

    const handleClose = () => setClosing(true);

    const handleTransitionEnd = (e) => {
        if (e.target !== panelRef.current) return;
        if (closing) {
            onClose();
            setClosing(false);
        }
    };

    if (!open) return null;

    const openClass = mounted && !closing ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0";
    const backdropClass = mounted && !closing ? "opacity-100" : "opacity-0 pointer-events-none";

    return (
        <>
            <div
                className={`absolute top-full left-0 right-0 min-h-[100vh] z-[42] transition-opacity duration-200 ${backdropClass}`}
                aria-hidden
                onClick={handleClose}
                style={{
                    opacity: 0.8,
                    background: "linear-gradient(180deg, #170AAF 5%, #161D5E 35.62%, #05062E 50%)",
                }}
            />
            <div
                ref={panelRef}
                className={`absolute left-0 right-0 top-full z-50 min-h-[320px] transition-all duration-300 ease-out ${openClass}`}
                // style={{
                //     opacity: 0.7,
                //     background: "linear-gradient(180deg, #170AAF 0%, #161D5E 77.62%, #05062E 100%)",
                // }}
                onTransitionEnd={handleTransitionEnd}
                role="dialog"
                aria-modal="true"
            >
               

                <div className="container relative mx-auto px-4 py-8 lg:py-10">
                    <div className={`grid grid-cols-1 gap-8 lg:gap-6 ${description ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
                        {/* Column 1: Intro paragraph */}
                        {description && (
                            <div className={`lg:max-w-[260px] ${isAr ? "lg:order-4" : ""}`}>
                                <p className="text-sm leading-relaxed text-white/95 md:text-base">
                                    {description}
                                </p>
                            </div>
                        )}

                        {/* Columns 2–4: Link groups (About GTCFX, Global Presence, Highlights) - no icons */}
                        {links?.map((linkGroup, index) => (
                            <div key={index} className="min-w-0">
                                {linkGroup.title && (
                                    <h3
                                        className={`mb-4 text-base font-bold text-white md:text-[17px] ${isAr ? "text-right" : "text-left"}`}
                                    >
                                        {linkGroup.title}
                                    </h3>
                                )}
                                <ul className="space-y-1">
                                    {linkGroup.items?.map((item, itemIndex) => {
                                        if (!item?.locale?.includes(locale)) return null;
                                        const itemActive = pathnameWithoutLocale === item.href;
                                        const linkCls = `
                                            block w-full rounded-lg px-3 py-2 text-sm font-normal text-white/90 transition-colors
                                            ${itemActive ? "bg-white/15 text-white" : "hover:bg-white/10 hover:text-white"}
                                            ${isAr ? "text-right" : "text-left"}
                                        `;
                                        return (
                                            <li key={itemIndex}>
                                                {isExternal(item.href) ? (
                                                    <a
                                                        href={item.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={linkCls}
                                                        onClick={onClose}
                                                    >
                                                        {item.label}
                                                    </a>
                                                ) : (
                                                    <Link href={item.href} locale={locale} className={linkCls} onClick={onClose}>
                                                        {item.label}
                                                    </Link>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

const Header = ({ currentLanguage }) => {
    const t = useTranslations("navigation");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const [show, setShow] = useState("");
    const [qrPopoverOpen, setQrPopoverOpen] = useState(false);
    const headerRef = useRef(null);
    const qrPopoverRef = useRef(null);

    // Close megamenu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (headerRef.current && !headerRef.current.contains(e.target)) setShow("");
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Prevent body scroll when megamenu is open
    useEffect(() => {
        if (show) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => { document.body.style.overflow = prev || ""; };
        }
    }, [show]);

    // Close megamenu and QR popover on Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                setShow("");
                setQrPopoverOpen(false);
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    // Close QR popover when clicking outside (anywhere)
    useEffect(() => {
        if (!qrPopoverOpen) return;
        const handleClickOutside = (e) => {
            if (qrPopoverRef.current && !qrPopoverRef.current.contains(e.target)) {
                setQrPopoverOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [qrPopoverOpen]);

    const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
    const [href, setHref] = useState([
        {
            href: "/",
            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
        },
    ]);
    const isAr = pathname.includes("/ar");
    const navigationData = [
        {
            title: t("about.lable"),
            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
            description: t("about.des"),
            img: "/new/img1.png",
            content: getAboutUsContent(),
            id: 1,
            links: [
                {
                    icon: <IoHomeOutline />,
                    title: t("about.firstcolumn.heading"),
                    items: [
                        {
                            href: "/about-us",
                            label: t("about.firstcolumn.option1"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/why-choose-us",
                            label: t("about.firstcolumn.option2"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/regulations",
                            label: t("about.firstcolumn.option3"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/careers",
                            label: t("about.thirdcolumn.option2"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/ifx-event-2026",
                            label: "IFX Event 2026",
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/contact-us",
                            label: t("about.thirdcolumn.option3"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                    ],
                },
                {
                    icon: <RiGlobalLine />,
                    title: t("about.secondcolumn.heading"),
                    items: [
                        {
                            href: "/global-presence",
                            label: t("about.secondcolumn.option1"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/awards",
                            label: t("about.secondcolumn.option2"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/compensation-fund",
                            label: t("about.secondcolumn.option3"),
                            locale: "en,ar,zh,zh,ms,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko",
                        },
                    ],
                },
                {
                    icon: <MdOutlineWbSunny />,
                    title: t("about.thirdcolumn.heading"),
                    items: [
                        {
                            href: "/blogs",
                            label: t("about.thirdcolumn.option4"),
                            locale: "en,zh",
                        },
                        {
                            href: "/company-news",
                            label: t("about.thirdcolumn.option1"),
                            locale: "en,zh",
                        },
                        {
                            href: "/earnings-calendar",
                            label: t("about.thirdcolumn.option5"),
                            locale: "en,zh",
                        },
                        {
                            href: "/economic-calendar",
                            label: t("trading.thirdcolumn.option2"),
                            locale: "en,ar,zh,zh,it,tr,fr,es,pt,ur,hi,vi,id,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/market-overview",
                            label: t("trading.thirdcolumn.option3"),
                            locale: "en,ar,zh,zh,it,tr,fr,es,pt,ur,hi,vi,id,tl,th,ko,,ja,ms,ru,ps",
                        },
                    ],
                },
            ],
        },
        {
            title: t("account.lable"),
            href: "#",
            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
            description: t("account.des"),
            content: getAccountContent(),
            id: 2,
            links: [
                {
                    icon: <MdOutlineManageAccounts />,
                    title: t("account.firstcolumn.heading"),
                    items: [
                        {
                            href: "https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww",
                            label: t("account.firstcolumn.option1"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/free-demo-account",
                            label: t("account.firstcolumn.option3"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/deposit",
                            label: t("account.firstcolumn.option2"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                    ],
                },
                {
                    icon: <LiaBoxesSolid />,
                    title: t("account.secondcolumn.heading"),
                    items: [
                        {
                            href: "/account-types",
                            label: t("account.secondcolumn.option1"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                    ],
                },

            ],
        },
        {
            title: t("trading.lable"),
            href: "#",
            locale: "en,ar,zh,zh,it,tr,fr,es,pt,ur,hi,vi,id,fa,fa,tl,th,ko,,ja,ms,ru,ps",
            description: t("trading.des"),
            content: getTradingContent(),
            id: 3,
            links: [
                {
                    icon: <RiStockLine />,
                    title: t("trading.firstcolumn.heading"),
                    items: [
                        {
                            href: "/forex",
                            label: t("trading.firstcolumn.option1"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/cfd-energy",
                            label: t("trading.firstcolumn.option6"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/commodities",
                            label: t("trading.firstcolumn.option4"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/indices",
                            label: t("trading.firstcolumn.option5"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/precious-metals",
                            label: t("trading.firstcolumn.option2"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },


                    ],
                },
                {
                    icon: <IoMdLaptop />,
                    title: t("trading.secondcolumn.heading"),
                    items: [
                        {
                            href: "/mt4-platform",
                            label: t("trading.secondcolumn.option1"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/mt5-platform",
                            label: t("trading.secondcolumn.option2"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/download-app",
                            label: t("trading.secondcolumn.option3"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                    ],
                },
                {
                    icon: <BsBarChart />,
                    title: t("trading.thirdcolumn.heading"),
                    items: [

                        {
                            href: "/tutorial-videos",
                            label: t("account.secondcolumn.option2"),
                            locale: "en,ar,zh,zh,it,tr,fr,es,pt,ur,hi,vi,id,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/glossary-faqs",
                            label: t("trading.thirdcolumn.option4"),
                            locale: "en,ar,zh,zh,it,tr,fr,es,pt,ur,hi,vi,id,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/dynamic-leverage",
                            label: t("trading.thirdcolumn.option5"),
                            locale: "en",
                        },
                        {
                            href: "/swap-update",
                            label: t("trading.thirdcolumn.option6"),
                            locale: "en",
                        },
                        {
                            href: "/swap-free-trading",
                            label: t("trading.thirdcolumn.option7"),
                            locale: "en",
                        },
                    ],
                },
            ],
        },
        {
            title: t("partner.lable"),
            href: "#",
            locale: "en,ar,zh,th,ko,,ja,ms,ru,ps,pt,tr,",
            description: t("partner.des"),
            content: getPartnerContent(),
            id: 4,
            links: [
                {
                    items: [
                        {
                            href: "/introductory-broker",
                            label: t("partner.firstcolumn.option1"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                    ],
                },
                {
                    items: [
                        {
                            href: "https://www.gtcaffiliates.com/",
                            label: t("partner.thirdcolumn.option1"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                    ],
                },
            ],
        },
        {
            title: t("technology.lable"),
            href: "#",
            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
            description: t("technology.des"),
            content: getTechContent(),
            id: 5,
            links: [
                {
                    icon: <FiBriefcase />,
                    title: t("technology.firstcolumn.heading"),
                    items: [
                        {
                            href: "/liquidity-technology",
                            label: t("technology.firstcolumn.option1"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/copy-trading",
                            label: t("technology.firstcolumn.option2"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                    ],
                },
                {
                    icon: <FiGitPullRequest />,
                    title: t("technology.secondcolumn.heading"),
                    items: [
                        {
                            href: "/pamm-account",
                            label: t("technology.secondcolumn.option1"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/mam-account",
                            label: t("technology.secondcolumn.option2"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                        {
                            href: "/vps-hosting-services",
                            label: t("technology.secondcolumn.option4"),
                            locale: "en,ar,zh,zh-tw,it,tr,fr,es,pt,ur,hi,vi,id,fa,tl,th,ko,,ja,ms,ru,ps",
                        },
                    ],
                },

            ],
        },
    ];
    const extractHrefsAndLocales = (data) => {
        if (data?.length > 0 && pathnameWithoutLocale != "/") {
            const extractedData = [];
            data.forEach((item) => {
                const { href, locale, links } = item;

                if (href && locale) {
                    extractedData.push({ href, locale });
                } else if (href) {
                    extractedData.push({ href, locale: null });
                }

                links.forEach((link) => {
                    link.items.forEach((subItem) => {
                        const { href, locale } = subItem;
                        if (href && locale) {
                            extractedData.push({ href, locale });
                        } else if (href) {
                            extractedData.push({ href, locale: null });
                        }
                    });
                });
            });
            setHref(extractedData?.filter((x) => x?.href == pathnameWithoutLocale));
            return extractedData;
        }
    };

    useEffect(() => {
        if (pathname == "/") {
            setHref([
                {
                    href: "/",
                    locale: "en,ar,zh,it,tr,fr,es,hi,vi,id,fa",
                },
            ]);
            return;
        }
        if (params?.slug) {
            setHref([
                {
                    href: `${params?.slug?.[0]}/${params?.slug?.[1]}/${params?.slug?.[2]}`,
                    locale: "en,ar",
                },
            ]);
            return;
        }
        if (navigationData) {
            extractHrefsAndLocales(navigationData);
        }
    }, [pathname]);

    return (
        <div ref={headerRef} className="relative z-[40]">
            <TopBar currentLanguage={currentLanguage} />
            <div className="header relative bg-white backdrop-blur-md border-b border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
                <nav className="container mx-auto py-3 lg:py-2">
                    <div className="flex justify-between items-center gap-4">
                        <Image
                            src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/logo.webp"
                            width={200}
                            height={72}
                            alt="GTCFX"
                            className="lg:w-[200px] lg:h-[72px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer shrink-0 transition-all duration-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                            onClick={() => router.push("/", { locale })}
                        />
                        <div className="lg:flex justify-end items-center hidden flex-1">
                            <ul className="hidden lg:flex items-center gap-1 mr-3">
                                {navigationData.map((item, index) => (
                                    <NavItem
                                        key={index}
                                        id={item?.id}
                                        title={item.title}
                                        href={item.href}
                                        locale={locale}
                                        links={item.links}
                                        show={show}
                                        setShow={setShow}
                                    />
                                ))}
                            </ul>
                            <div className="relative flex items-center" ref={qrPopoverRef}>
                                <button
                                    type="button"
                                    onClick={() => setQrPopoverOpen((o) => !o)}
                                    className="p-2 rounded-lg cursor-pointer hover:text-white/75 text-white transition-colors"
                                    style={{
                                        background: "linear-gradient(rgb(23, 10, 175) 5%, rgb(22, 29, 94) 35.62%, rgb(5, 6, 46) 50%)",
                                    }}
                                    aria-label="Show QR code"
                                >
                                    <TbDownload size={18} />
                                </button>
                                {qrPopoverOpen && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-[52]"
                                            aria-hidden
                                            onClick={() => setQrPopoverOpen(false)}
                                        />
                                        <div
                                            className="absolute min-w-[180px] top-full right-0 mt-2 z-[53] rounded-lg bg-white shadow-xl border border-gray-200 p-3"
                                            role="dialog"
                                            aria-label="QR code"
                                        >
                                            <p className="text-xs font-medium text-gray-700 mb-2 text-center">Scan to download</p>
                                            <Image
                                                src="/app/qrcode.webp"
                                                alt="GTCFX Mobile App QR Code"
                                                width={140}
                                                height={140}
                                                className="rounded"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                            <div
                                className={`flex items-center gap-2 ${isAr ? "md:mr-4" : "md:ml-4"
                                    }`}
                            ></div>
                        </div>
                        <div className="lg:hidden flex gap-2 items-center">
                            {/* <Language href={href} /> */}
                            <MobileMenu navigationData={navigationData} href={href} />
                        </div>
                    </div>
                </nav>
                {/* Megamenu dropdown - below nav, slides down from top */}
                {(() => {
                    const activeNav = navigationData.find((n) => n.id === show);
                    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
                    return activeNav ? (
                        <MegamenuDropdown
                            open={!!show}
                            onClose={() => setShow("")}
                            navTitle={activeNav.title}
                            description={activeNav.description}
                            content={activeNav.content}
                            img={activeNav.img}
                            links={activeNav.links}
                            locale={locale}
                            pathnameWithoutLocale={pathWithoutLocale}
                            isAr={!!isAr}
                        />
                    ) : null;
                })()}
            </div>
        </div>
    );
};

export default Header;
