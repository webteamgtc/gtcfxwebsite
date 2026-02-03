import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ToastContainer } from "react-toastify";
import "react-vertical-timeline-component/style.min.css";

import Script from "next/script";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const isArabicOrKurdish = locale === "ar" || locale === "ku";

  return (
    <html
      lang={locale}
      dir={isArabicOrKurdish ? "rtl" : "ltr"}
      style={{
        fontFamily: isArabicOrKurdish ? '"Noto Kufi Arabic", "Poppins", sans-serif' : '"Poppins", sans-serif',
      }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        <style>{`
          html, body, *, *::before, *::after {
            font-family: ${isArabicOrKurdish ? '"Noto Kufi Arabic", "Poppins", sans-serif' : '"Poppins", sans-serif'} !important;
          }
        `}</style>
      </head>

      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <ToastContainer autoClose={3000} />
      </body>
    </html>
  );
}
