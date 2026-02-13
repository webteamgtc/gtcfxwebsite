import React from 'react';
import {  useTranslations } from "next-intl";
 import { MdOutlineLogin } from "react-icons/md";
import { useLocationDetail } from "../../../context/useLocationDetail";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from '@/i18n/navigation';
 
const TopBar = ({ currentLanguage, isAr, href }) => {
  const t = useTranslations("navigation");
   const { countryCode } = useLocationDetail(); // ✅ This is correct

  // Define base links for different regions
  const baseLink =
    countryCode === 'UZ'
      ? 'https://mygtcportal.com/getview?view=register&token=298uowwweowwwwww'
      : 'https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww';

  const baseLink2 =
    countryCode === 'JP'
      ? 'https://mygtcportal.com'
      : 'https://mygtcportal.com';

  const newClientPortalLink = `${baseLink2}/`;
  const accountLink = `${baseLink}`;
  const registerLink = `${baseLink}`;

  return (
    <section className="hidden bg-gradient-to-r from-[#0A0D2E] to-[#1A2256] lg:block border-b border-white/15 bg-black/15 backdrop-blur-sm text-white" id="register1">
      <div className="container mx-auto flex flex-row justify-between items-center">
        {/* Contact Info */}
        <div className="content-top flex flex-row gap-2">
          <p className="text-[14px] font-[400] flex items-center gap-4 py-3">
            <Link href="tel:+971800667788" className="flex items-center gap-2 hover:text-secondary text-sm">
              <BsTelephoneFill /> +971 800 667788
            </Link>
            <span className="h-4 border-l border-white"></span>
            <Link href="mailto:support@gtcfx.com" className="flex items-center gap-2 hover:text-secondary text-sm">
              <MdEmail /> support@gtcfx.com
            </Link>
            <span className="h-4 border-l border-white"></span>
            <Link
              href="https://wa.me/448000488461"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-secondary text-sm"
            >
              <FaWhatsapp /> +44 800 048 8461
            </Link>
          </p>
        </div>

        {/* Links Section */}
        <div className={`flex items-center gap-2 ${isAr ? "rtl:md:mr-4" : "ltr:md:ml-4"}`}>
          <Link href="https://mygtcfx.com/" target="_blank" className="hidden text-white uppercase hover:bg-white hover:text-secondary text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center">
            <MdOutlineLogin size={20} />
            {t("new_client_portal")}
          </Link>

          <Link href="https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww" target="_blank" className="hidden text-white uppercase bg-[#29a643] hover:bg-white hover:text-primary text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center">
            {t("tobbar.account")}
          </Link>
          <Link href='/introductory-broker' className="hidden text-white uppercase bg-secondary hover:bg-primary hover:text-white text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center">
            {t("tobbar.rgister")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
