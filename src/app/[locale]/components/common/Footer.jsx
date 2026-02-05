"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import CopyRight from "./CopyRight";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { usePathname } from "next/navigation";
import {
    BiLogoFacebookCircle,
    BiLogoYoutube,
    BiLogoLinkedinSquare,
    BiLogoInstagramAlt,
    BiLogoTelegram,
    BiLogoTiktok,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import RatingsBar from "./RatingsBar";
import { Link, useRouter } from "@/i18n/navigation";


const Footer = () => {
    const t = useTranslations("footerLink");
    const t2 = useTranslations("home.hero");
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");

    // Add a check to see if the pathname is not the home page
    const isNotHomePage = pathname !== `/${locale}` && pathname !== "/";

    const emailLink =
        locale === "fa" ? "support.tr@gtcfx.com" : "support@gtcfx.com";

    const socialMediaIcons = [
        {
            icon: BiLogoFacebookCircle,
            link: "https://www.facebook.com/GTCFXGlobalTradeCapital",
        },
        {
            icon: BiLogoInstagramAlt,
            link: "https://www.instagram.com/gtcfxofficial/",
        },
        { icon: FaXTwitter, link: "https://x.com/GTC_fx" },
        {
            icon: BiLogoYoutube,
            link: "https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA",
        },
        {
            icon: BiLogoLinkedinSquare,
            link: "https://linkedin.com/company/gtcfx-official",
        },
        { icon: BiLogoTiktok, link: "https://www.tiktok.com/@gtcgroup_official" },
        { icon: BiLogoTelegram, link: "https://t.me/gtc_vip_signal" },
    ];

    // Footer sections - first 4 columns
    const footerSections = [
        {
            title: t("link.label"),
            links: [
                {
                    name: t("link.menu1"),
                    link: "/about-us",
                },
                {
                    name: t("link.menu6"),
                    link: "/why-gtc-group",
                },

                {
                    name: t("link.menu5"),
                    link: "/global-presence",
                },
                {
                    name: t("link.menu3"),
                    link: "/awards",
                },

                {
                    name: t("link.menu11"),
                    link: "/company-news",
                },
                {
                    name: t("link.menu12"),
                    link: "/blogs",
                },
                {
                    name: t("link.menu8"),
                    link: "/careers",
                },
                {
                    name: t("link.menu9"),
                    link: "/contact-us",
                },
            ],
        },
        {
            title: t("rules.label"),
            links: [
                {
                    name: t("rules.menu1"),
                    link: "/forex",
                },
                {
                    name: t("rules.menu2"),
                    link: "/precious-metals",
                },
                {
                    name: t("rules.menu3"),
                    link: "/stock",
                },
                {
                    name: t("rules.menu4"),
                    link: "/cfd-energy",
                },
                {
                    name: t("rules.menu5"),
                    link: "/commodities",
                }
            ],
        },
        {
            title: t("rules.label2"),
            links: [
                {
                    name: t("rules.menu6"),
                    link: "/mt4-platform",
                },
                {
                    name: t("rules.menu7"),
                    link: "/mt5-platform",
                },

                {
                    name: t("rules.menu9"),
                    link: "/download-app",
                },
                {
                    name: t("link.menu2"),
                    link: "/regulations",
                },

                {
                    name: t("link.menu10"),
                    link: "/glossary-faqs",
                },

                {
                    name: t("link.menu7"),
                    link: "/restricted-countries",
                },
                {
                    name: t("update.menu10"),
                    link: "/legal-policies-client-agreements",
                },
            ],
        },
        {
            title: t("update.label"),
            links: [
                {
                    name: t("update.menu1"),
                    link: "/liquidity-technology",
                },
                {
                    name: t("update.menu2"),
                    link: "/copy-trading",
                },
                {
                    name: t("update.menu3"),
                    link: "/pamm-account",
                },
                {
                    name: t("update.menu4"),
                    link: "/mam-account",
                },
                {
                    name: t("update.menu9"),
                    link: "/vps-hosting-services",
                }

            ],
        }, ,
    ];

    const contact = [
        {
            title: t("contact.label"),
            links: [
                {
                    text: t("contact.num"),
                    label: t("contact.menu1"),
                    icon: BsTelephoneFill,
                },
                {
                    text: emailLink,
                    label: t("contact.menu2"),
                    icon: MdEmail,
                },
                {
                    text: "393526",
                    label: t("contact.menu3"),
                    icon: FaEnvelopeOpenText,
                },
                {
                    text: "24/7",
                    label: t("contact.menu4"),
                    icon: AiFillClockCircle,
                },
            ],
        },
    ];

    return (
        <>
            <div
                className={`pb-10 z-30 py-2 md:pt-14 xl:pt-16 md:pb-8 xl:pb-10 relative overflow-hidden mt-8 ${isNotHomePage ? "mt-16" : ""
                    }`}
                style={{
                    background: "linear-gradient(to bottom, #293B93, #0D122D)",
                }}
            >
                <div className="container mx-auto px-3 mb-6 relative z-10 border-b border-opacity-20 pb-6 mt-6 border-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                        {/* LEFT */}
                        <h2 className="text-white text-xl md:text-3xl font-semibold text-center md:text-left uppercase">
                            {t2("slider1.heading")}
                        </h2>


                        {/* RIGHT */}
                        <div className="flex justify-center md:justify-end items-center gap-3">
                            {socialMediaIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
          text-white
           hover:from-[#fff] hover:via-[#fff] hover:to-[#fff]
          hover:text-secondary
          transition-all
           rounded-[6px]
          p-2
          hover:border-secondary
        "
                                    aria-label={`Social media ${index + 1}`}
                                >
                                    {React.createElement(social.icon, { size: 24 })}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Footer Links - 5 Columns (4 sections + 1 contact) */}
                <div className="container mx-auto px-3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6 mb-12 relative z-10">
                    {/* First 4 columns - Footer Sections */}
                    {footerSections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            <h4 className="font-semibold pb-3 text-secondary text-sm md:text-base uppercase">
                                {section.title}
                            </h4>
                            <ul className="list-none space-y-2">
                                {section.links.map((link, linkIndex) => {
                                    const activeClass =
                                        pathnameWithoutLocale === link.link
                                            ? "text-secondary"
                                            : "text-white";
                                    return (
                                        <li
                                            key={linkIndex}
                                            className={`${activeClass} text-sm font-normal hover:text-secondary cursor-pointer transition-colors`}
                                            onClick={() => {
                                                router.push(link.link, { locale: locale });
                                            }}
                                        >
                                            {link.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}

                    {/* 5th Column - Contact */}
                    <div className="hidden sm:block">
                        <h4 className="font-semibold pb-3 text-secondary text-sm md:text-base mb-3 uppercase">
                            {contact[0].title}
                        </h4>
                        <ul className="list-none space-y-2">
                            {contact[0].links.map((link, index) => (
                                <li
                                    key={index}
                                    className="text-white rtl:text-xs font-normal leading-6 flex items-start gap-2"
                                >
                                    <link.icon size={18} className="text-secondary mt-1 flex-shrink-0" />
                                    <div className="flex gap-2">
                                        <b className="text-white">{link.label}</b>
                                        <p className="text-white">{link.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Logo and App Download Section */}
                <div className="container mx-auto px-3 py-3 border-t border-white border-opacity-20 relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-2 md:gap-8 py-2 sm:py-0">
                        {/* Logo Section */}
                        <div className="flex flex-col items-center lg:items-start">
                            <Link href="/" locale={locale} aria-label="GTCFX">
                                <Image
                                    src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/footer-logo.webp"
                                    width={150}
                                    height={53}
                                    alt="GTCFX official logo"
                                    className=""
                                    priority
                                />
                            </Link>
                        </div>
                        <div className="flex flex-row gap-4">
                            <a
                                href="https://apps.apple.com/ae/app/gtc-go/id6753007277"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-transparent border border-white border-opacity-30 rounded-lg px-4 py-1.5 hover:opacity-90 transition-opacity"
                                aria-label="Download on the App Store"
                            >
                                <svg
                                    className="w-8 h-8 mr-2 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                <div className="text-left text-white">
                                    <div className="text-[10px] leading-tight">
                                        Download on the
                                    </div>
                                    <div className="text-sm font-semibold leading-tight">
                                        App Store
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://play.google.com/store/search?q=GTC%20Go&c=apps&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-transparent border border-white border-opacity-30 hover:from-[#263788] hover:via-[#101638] hover:to-[#263788]  rounded-lg px-4 py-1.5 hover:opacity-90 transition-opacity"
                                aria-label="Get it on Google Play"
                            >
                                <svg
                                    className="w-8 h-8 mr-2 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                <div className="text-left text-white">
                                    <div className="text-[10px] leading-tight">GET IT ON</div>
                                    <div className="text-sm font-semibold leading-tight">
                                        Google Play
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Disclaimers Section */}
                <div className="container mx-auto px-3 border-t border-white border-opacity-20 pt-8 relative z-10">
                    <div className="text-xs text-white text-opacity-70 space-y-3 leading-5">
                        <p>{t("footerNotice.firstPara")}</p>
                        <p>
                            <span className="text-secondary">
                                {t("footerNotice.gtc_group_heading1")}
                            </span>
                            {t("footerNotice.gtc_group_para1")}
                        </p>
                        <p>{t("footerNotice.gtc_multi_trading_para")}</p>
                        <p>
                            <span className="text-secondary">
                                {t("footerNotice.gtc_global_pty_heading")}
                            </span>
                            {t("footerNotice.gtc_global_pty_para")}
                        </p>
                        <p>{t("footerNotice.eightPara")}</p>
                    </div>
                </div>
            </div>
            <CopyRight />
        </>
    );
};

export default Footer;
