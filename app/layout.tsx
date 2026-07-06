import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MotionProvider } from "../components/site/MotionProvider";
import { companyInfo, defaultSiteContent } from "../content";
import "./globals.css";

export const metadata: Metadata = {
  title: companyInfo.brandName,
  description: defaultSiteContent.siteDescription,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <MotionProvider />
        {children}
      </body>
    </html>
  );
}
