import type { CSSProperties } from "react";
import type { Metadata } from "next";

import { PageHero } from "../../../components/site/PageHero";
import { SectionHeading } from "../../../components/site/SectionHeading";
import { SiteShell } from "../../../components/site/SiteShell";
import { SurfaceCard } from "../../../components/site/SurfaceCard";
import { companyInfo, getAboutPageContent } from "../../../content";
import { mediaAssets } from "../../../content/media-assets";
import type { HeroAction } from "../../../content/types";
import {
  defaultLocale,
  isSupportedLocale,
  locales,
  type Locale,
} from "../../../lib/i18n";
import { getLocaleHref } from "../../../lib/site";
import styles from "./page.module.css";

type AboutPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : defaultLocale;
  const pageContent = getAboutPageContent(safeLocale);

  return {
    title: pageContent.metadata.title,
    description: pageContent.metadata.description,
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : defaultLocale;
  const pageContent = getAboutPageContent(safeLocale);

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
      <div
        data-parallax
        className={styles.heroWrap}
        style={{ "--about-hero-image": `url(${mediaAssets.aboutHeroImage.src})` } as CSSProperties}
      >
        <section className={styles.introHeroSection}>
          <SiteShell>
            <div className={styles.introHeroGrid}>
              {pageContent.intro.items.map((item) => (
                <article key={item.title} className={styles.introCard} data-reveal="default">
                  <h2 className={styles.introTitle}>{item.title}</h2>

                  <div className={styles.introParagraphs}>
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph} className={styles.introText}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </SiteShell>
        </section>
      </div>

      <PageHero
        eyebrow={pageContent.hero.eyebrow}
        titleLine1={pageContent.hero.titleLine1}
        titleLine2={pageContent.hero.titleLine2}
        description={pageContent.hero.description}
        notice={pageContent.hero.notice}
        actions={heroActions}
        highlights={pageContent.heroHighlights}
        sectionClassName={styles.movedHeroSection}
        cardClassName={styles.movedHeroCard}
        contentClassName={styles.movedHeroContent}
        titleClassName={styles.movedHeroTitle}
        descriptionClassName={styles.movedHeroDescription}
        actionsClassName={styles.movedHeroActions}
        actionPrimaryClassName={styles.movedHeroActionPrimary}
        actionSecondaryClassName={styles.movedHeroActionSecondary}
        noticeClassName={styles.movedHeroNotice}
        highlightCardClassName={styles.movedHeroHighlightCard}
        highlightTitleClassName={styles.movedHeroHighlightTitle}
        highlightDescriptionClassName={styles.movedHeroHighlightDescription}
      />

      <SiteShell>
        <section className={styles.section}>
          <div className={styles.overviewGrid}>
            <SectionHeading
              eyebrow={pageContent.overview.section.eyebrow}
              title={pageContent.overview.section.title}
              description={pageContent.overview.section.description}
              className={styles.overviewHeading}
            />

            <div className={styles.overviewContent}>
              <div className={styles.overviewNarrative}>{pageContent.overview.narrative}</div>

              <div className={styles.pointList}>
                {pageContent.overview.points.map((item) => (
                  <div key={item} className={styles.pointItem}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <SectionHeading
            eyebrow={pageContent.portfolio.section.eyebrow}
            title={pageContent.portfolio.section.title}
            description={pageContent.portfolio.section.description}
            className={styles.portfolioHeading}
          />

          <div className={styles.cardGrid}>
            {pageContent.portfolio.cards.map((item) => (
              <SurfaceCard
                key={item.title}
                title={item.title}
                description={item.description}
                className={styles.card}
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.contactBox}>
            <SectionHeading
              eyebrow={pageContent.contact.section.eyebrow}
              title={pageContent.contact.section.title}
              description={pageContent.contact.section.description}
              className={styles.sectionHeading}
            />

            <div className={styles.actions}>
              <a className={`${styles.actionLink} ${styles.actionPrimary}`} href={companyInfo.emailHref}>
                {pageContent.contact.primaryLabel}
              </a>
              <a className={`${styles.actionLink} ${styles.actionSecondary}`} href={getLocaleHref(safeLocale, "contact")}>
                {pageContent.contact.secondaryLabel}
              </a>
            </div>

            <div className={styles.cardGrid}>
              {pageContent.contact.cards.map((item) => (
                <SurfaceCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  className={styles.card}
                />
              ))}
            </div>
          </div>
        </section>
      </SiteShell>
    </main>
  );
}
