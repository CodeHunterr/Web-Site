import type { Metadata } from "next";
import type { ReactNode } from "react";
import { companyInfo, defaultSiteContent } from "../content";
import "./globals.css";

export const metadata: Metadata = {
  title: companyInfo.brandName,
  description: defaultSiteContent.siteDescription,
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
