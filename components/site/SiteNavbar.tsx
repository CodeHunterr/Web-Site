"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { companyInfo } from "../../content/company";
import type { SiteContent } from "../../content/types";
import { locales, type Locale } from "../../lib/i18n";
import { getLocaleHref, replaceLocaleInPath } from "../../lib/site";
import { SiteShell } from "./SiteShell";
import styles from "./SiteNavbar.module.css";

type SiteNavbarProps = {
  locale: Locale;
  siteContent: SiteContent;
};

function joinClasses(...classNames: Array<string | undefined | false>) {
  return classNames.filter(Boolean).join(" ");
}

function isActivePath(pathname: string, locale: Locale, path: string) {
  const targetPath = getLocaleHref(locale, path);

  if (!path) {
    return pathname === targetPath;
  }

  return pathname === targetPath || pathname.startsWith(`${targetPath}/`);
}

export function SiteNavbar({ locale, siteContent }: SiteNavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const [hasLogoError, setHasLogoError] = useState(false);

  useEffect(() => {
    const syncHash = () => {
      setCurrentHash(window.location.hash);
    };

    syncHash();
    setIsMenuOpen(false);
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
    };
  }, [pathname]);

  return (
    <header className={styles.header}>
      <SiteShell className={styles.shell}>
        <div className={styles.inner}>
          <Link
            aria-label={companyInfo.brandName}
            className={styles.brand}
            href={getLocaleHref(locale)}
          >
            <span aria-hidden="true" className={styles.brandMark}>
              {hasLogoError ? (
                <span className={styles.brandFallback}>P</span>
              ) : (
                <img
                  alt={companyInfo.logoAlt}
                  className={styles.brandImage}
                  onError={() => setHasLogoError(true)}
                  src={companyInfo.logoSrc}
                />
              )}
            </span>
          </Link>

          <button
            aria-controls="site-navigation"
            aria-expanded={isMenuOpen}
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen((value) => !value)}
            type="button"
          >
            <span className={styles.menuToggleLine} />
            <span className={styles.menuToggleLine} />
            <span className={styles.menuToggleLine} />
          </button>

          <div
            className={joinClasses(styles.menu, isMenuOpen && styles.menuOpen)}
            id="site-navigation"
          >
            <nav className={styles.primaryNav}>
              {siteContent.navigation.primary.map((item) => {
                const href = getLocaleHref(locale, item.path, item.hash);
                const isActive = item.hash
                  ? pathname === getLocaleHref(locale) && currentHash === `#${item.hash}`
                  : item.path
                    ? isActivePath(pathname, locale, item.path)
                    : pathname === getLocaleHref(locale);

                return (
                  <Link
                    key={`${item.label}-${item.path}-${item.hash ?? "root"}`}
                    className={joinClasses(styles.navLink, isActive && styles.navLinkActive)}
                    href={href}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <nav aria-label="Language switcher" className={styles.localeNav}>
              {locales.map((item) => (
                <Link
                  key={item}
                  className={joinClasses(
                    styles.localeLink,
                    item === locale && styles.localeLinkActive,
                  )}
                  href={replaceLocaleInPath(pathname, item, currentHash)}
                >
                  {siteContent.navigation.localeLabels[item]}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </SiteShell>
    </header>
  );
}
