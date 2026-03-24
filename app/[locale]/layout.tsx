import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { SiteFooter } from "../../components/site/SiteFooter";
import { SiteNavbar } from "../../components/site/SiteNavbar";
import { companyInfo, defaultSiteContent, getSiteContent } from "../../content";
import { isSupportedLocale } from "../../lib/i18n";
import styles from "./layout.module.css";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {
      title: companyInfo.brandName,
      description: defaultSiteContent.siteDescription,
    };
  }
  const siteContent = getSiteContent(locale);

  return {
    title: siteContent.metadataTitle,
    description: siteContent.siteDescription,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }
  const siteContent = getSiteContent(locale);

  return (
    <div className={styles.frame} lang={locale}>
      <SiteNavbar locale={locale} siteContent={siteContent} />
      <div className={styles.content}>{children}</div>
      <SiteFooter locale={locale} siteContent={siteContent} />
    </div>
  );
}
