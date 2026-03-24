import type { Metadata } from "next";

import { FeatureListCard } from "../../../components/site/FeatureListCard";
import { PageHero } from "../../../components/site/PageHero";
import { SectionHeading } from "../../../components/site/SectionHeading";
import { SiteShell } from "../../../components/site/SiteShell";
import { getApplicationsPageContent } from "../../../content";
import type { HeroAction } from "../../../content/types";
import {
  defaultLocale,
  isSupportedLocale,
  locales,
  type Locale,
} from "../../../lib/i18n";
import styles from "./page.module.css";

type ApplicationsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ApplicationsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : defaultLocale;
  const pageContent = getApplicationsPageContent(safeLocale);

  return {
    title: pageContent.metadata.title,
    description: pageContent.metadata.description,
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ApplicationsPage({
  params,
}: ApplicationsPageProps) {
  const { locale } = await params;
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : defaultLocale;
  const pageContent = getApplicationsPageContent(safeLocale);
  const supplyContactHref = `/${safeLocale}/contact#contact-form`;

  const heroActions = [
    {
      href: "#applications-grid",
      label: pageContent.hero.secondaryLabel,
      variant: "secondary",
    },
  ] satisfies HeroAction[];

  return (
    <main className={styles.page}>
      <PageHero
        eyebrow={pageContent.hero.eyebrow}
        titleLine1={pageContent.hero.titleLine1}
        titleLine2={pageContent.hero.titleLine2}
        description={pageContent.hero.description}
        notice={pageContent.hero.notice}
        actions={heroActions}
        highlights={pageContent.heroHighlights}
        titleClassName={styles.heroTitle}
      />

      <SiteShell>
        <section className={styles.section} id="development-approach">
          <SectionHeading
            eyebrow={pageContent.developmentApproach.eyebrow}
            title={pageContent.developmentApproach.title}
            description={pageContent.developmentApproach.description}
            className={styles.sectionHeadingCentered}
          />
        </section>

        <section className={styles.section} id="applications-grid">
          <div className={styles.cardGrid}>
            {pageContent.sectors.map((item) => (
              <FeatureListCard
                key={item.title}
                title={item.title}
                description={item.description}
                features={item.features}
                className={styles.applicationCard}
                titleClassName={styles.cardTitle}
                descriptionClassName={styles.cardDescription}
                listClassName={styles.featureList}
                itemClassName={styles.featureItem}
              />
            ))}
          </div>
        </section>

        <section className={styles.section} id="raw-kaolin-supply">
          <div className={styles.supplyBlock}>
            <div className={styles.supplyMain}>
              <SectionHeading
                eyebrow={pageContent.supplyHighlight.section.eyebrow}
                title={pageContent.supplyHighlight.section.title}
                description={pageContent.supplyHighlight.section.description}
                className={styles.supplyHeading}
                titleClassName={styles.supplyTitle}
                descriptionClassName={styles.supplyDescription}
              />

              <p className={styles.supplyIntro}>
                {pageContent.supplyHighlight.intro}
              </p>
            </div>

            <div className={styles.supplyAside}>
              <p className={styles.supplyLead}>
                {pageContent.supplyHighlight.supportLead}
              </p>

              <ul className={styles.supplyList}>
                {pageContent.supplyHighlight.supports.map((item) => (
                  <li key={item} className={styles.supplyItem}>
                    {item}
                  </li>
                ))}
              </ul>

              <p className={styles.supplyClosing}>
                {pageContent.supplyHighlight.closing}
              </p>

              <a className={styles.supplyCta} href={supplyContactHref}>
                {pageContent.supplyHighlight.ctaLabel}
              </a>
            </div>
          </div>
        </section>
      </SiteShell>
    </main>
  );
}
