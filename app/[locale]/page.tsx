import type { Metadata } from "next";

import { HomeHeroSlider } from "../../components/site/HomeHeroSlider";
import { SectionHeading } from "../../components/site/SectionHeading";
import { SiteShell } from "../../components/site/SiteShell";
import { SurfaceCard } from "../../components/site/SurfaceCard";
import { getHomePageContent } from "../../content";
import type { HeroAction } from "../../content/types";
import {
  defaultLocale,
  isSupportedLocale,
  locales,
  type Locale,
} from "../../lib/i18n";
import { getLocaleHref } from "../../lib/site";
import styles from "./page.module.css";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : defaultLocale;
  const pageContent = getHomePageContent(safeLocale);

  return {
    title: pageContent.metadata.title,
    description: pageContent.metadata.description,
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : defaultLocale;
  const pageContent = getHomePageContent(safeLocale);

  const heroActions = [
    {
      href: getLocaleHref(safeLocale, "contact"),
      label: pageContent.hero.primaryLabel,
      variant: "primary",
    },
    {
      href: getLocaleHref(safeLocale, "applications"),
      label: pageContent.hero.secondaryLabel,
      variant: "secondary",
    },
  ] satisfies HeroAction[];

  return (
    <main className={styles.page}>
      <HomeHeroSlider
        titleLine1={pageContent.hero.titleLine1}
        titleLine2={pageContent.hero.titleLine2}
        description={pageContent.hero.description}
        notice={pageContent.hero.notice}
        actions={heroActions}
        slides={pageContent.heroSlides}
        lead={pageContent.heroAside}
        infoItems={pageContent.heroInfoItems}
      />

      <SiteShell>
        <section className={styles.section} id="raw-kaolin-supply">
          <div className={styles.supplyBox}>
            <div className={styles.supplyGrid}>
              <SectionHeading
                eyebrow={pageContent.supply.section.eyebrow}
                title={pageContent.supply.section.title}
                description={pageContent.supply.section.description}
                className={styles.sectionHeading}
              />

              <div className={styles.supplyContent}>
                <div className={styles.supplyCards}>
                  {pageContent.supply.cards.map((item) => (
                    <SurfaceCard
                      key={item.title}
                      title={item.title}
                      description={item.description}
                      className={styles.supplyCard}
                    />
                  ))}
                </div>

                <div className={styles.contactActions}>
                  <a className={`${styles.actionLink} ${styles.actionPrimary}`} href={getLocaleHref(safeLocale, "contact")}>
                    {pageContent.supply.primaryLabel}
                  </a>
                  <a className={`${styles.actionLink} ${styles.actionSecondary}`} href={getLocaleHref(safeLocale, "kaolin")}>
                    {pageContent.supply.secondaryLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="about">
          <div className={styles.aboutGrid}>
            <SectionHeading
              eyebrow={pageContent.about.section.eyebrow}
              title={pageContent.about.section.title}
              description={pageContent.about.section.description}
              className={styles.sectionHeading}
            />

            <div className={styles.aboutContent}>
              <div className={styles.aboutNarrative}>{pageContent.about.narrative}</div>

              <div className={styles.aboutList}>
                {pageContent.about.points.map((item) => (
                  <div key={item} className={styles.aboutListItem}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="applications">
          <SectionHeading
            eyebrow={pageContent.applications.section.eyebrow}
            title={pageContent.applications.section.title}
            description={pageContent.applications.section.description}
            className={styles.sectionHeadingCentered}
          />

          <div className={styles.applicationsGrid}>
            {pageContent.applications.cards.map((item) => (
              <SurfaceCard
                key={item.title}
                title={item.title}
                description={item.description}
                className={styles.applicationCard}
              />
            ))}
          </div>
        </section>
      </SiteShell>
    </main>
  );
}
