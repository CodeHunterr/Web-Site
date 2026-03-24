import Link from "next/link";

import { companyInfo } from "../../content/company";
import type { SiteContent } from "../../content/types";
import type { Locale } from "../../lib/i18n";
import { getLocaleHref } from "../../lib/site";
import { SiteShell } from "./SiteShell";
import styles from "./SiteFooter.module.css";

type SiteFooterProps = {
  locale: Locale;
  siteContent: SiteContent;
};

export function SiteFooter({ locale, siteContent }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <SiteShell>
        <div className={styles.card}>
          <div className={styles.grid}>
            <div className={styles.brandBlock}>
              <p className={styles.eyebrow}>{siteContent.brandTagline}</p>
              <h2 className={styles.brandName}>{companyInfo.brandName}</h2>
              <p className={styles.summary}>{siteContent.companySummary}</p>
            </div>

            <div className={styles.linkBlock}>
              <h3 className={styles.blockTitle}>{siteContent.footer.quickLinksTitle}</h3>
              <nav className={styles.linkList}>
                {siteContent.navigation.primary.map((item) => (
                  <Link
                    key={`${item.label}-${item.path}-${item.hash ?? "root"}`}
                    className={styles.link}
                    href={getLocaleHref(locale, item.path, item.hash)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className={styles.contactBlock}>
              <h3 className={styles.blockTitle}>{siteContent.footer.contactTitle}</h3>

              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>{siteContent.footer.addressLabel}</span>
                  <span className={styles.contactValue}>{companyInfo.address}</span>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>{siteContent.footer.emailLabel}</span>
                  <a className={styles.contactLink} href={companyInfo.emailHref}>
                    {companyInfo.email}
                  </a>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>{siteContent.footer.phoneLabel}</span>
                  <a className={styles.contactLink} href={companyInfo.phoneHref}>
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bottomBar}>{siteContent.footer.copyright}</div>
        </div>
      </SiteShell>
    </footer>
  );
}
