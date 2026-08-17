import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cameron Morales",
  description:
    "Cameron Morales — full-stack and infrastructure engineer in Chicago.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* The no-page-custom-font rule targets the pages router, where a font
            link in one page wouldn't apply site-wide. This is the App Router
            root layout, so it covers every route. Loading via <link> rather
            than next/font keeps /resume (a static file in public/) and this
            page on byte-identical font requests. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,600&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
