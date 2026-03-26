import type { Metadata } from "next";

import { AnimatedSectionBackground } from "../../../components/site/AnimatedSectionBackground";
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
      <AnimatedSectionBackground
        alt="Pluto Enerji applications hero background"
        className={styles.heroStage}
        overlayClassName={styles.heroOverlay}
        priority
        src="/images/Application/app-1.png"
      >
        <PageHero
          eyebrow={pageContent.hero.eyebrow}
          titleLine1={pageContent.hero.titleLine1}
          titleLine2={pageContent.hero.titleLine2}
          description={pageContent.hero.description}
          notice={pageContent.hero.notice}
          actions={heroActions}
          highlights={pageContent.heroHighlights}
          frameless
          cardClassName={styles.heroSurface}
          titleClassName={styles.heroTitle}
        />
      </AnimatedSectionBackground>

      <section className={styles.section} id="applications-grid">
        <AnimatedSectionBackground
          alt="Pluto Enerji applications content background"
          className={styles.applicationsStage}
          overlayClassName={styles.applicationsOverlay}
          sizes="100vw"
          src="/images/Application/app-2.png"
        >
          <SiteShell>
            <div className={styles.applicationsStageContent}>
              <SectionHeading
                eyebrow={pageContent.developmentApproach.eyebrow}
                title={pageContent.developmentApproach.title}
                description={pageContent.developmentApproach.description}
                className={styles.approachHeading}
                eyebrowClassName={styles.stageEyebrow}
                titleClassName={styles.stageTitle}
                descriptionClassName={styles.stageDescription}
              />

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
            </div>
          </SiteShell>
        </AnimatedSectionBackground>
      </section>

      <section className={styles.section} id="raw-kaolin-supply">
        <AnimatedSectionBackground
          alt="Pluto Enerji raw kaolin supply background"
          className={styles.supplyStage}
          overlayClassName={styles.supplyOverlay}
          sizes="100vw"
          src="/images/Application/app-3.png"
        >
          <SiteShell>
            <div className={styles.supplyStageContent}>
              <div className={styles.supplyBlock}>
                <div className={styles.supplyMain}>
                <SectionHeading
                    eyebrow=""
                    title={pageContent.supplyHighlight.section.title}
                    description={pageContent.supplyHighlight.section.description}
                    className={styles.supplyHeading}
                    eyebrowClassName={styles.stageEyebrow}
                    titleClassName={`${styles.supplyTitle} ${styles.stageTitle}`}
                    descriptionClassName={`${styles.supplyDescription} ${styles.stageDescription}`}
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
            </div>
          </SiteShell>
        </AnimatedSectionBackground>
      </section>
    </main>
  );
}
