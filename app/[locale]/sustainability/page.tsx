import type { Metadata } from "next";

import { ApplicationSlider } from "../../../components/site/ApplicationSlider";
import { PageHero } from "../../../components/site/PageHero";
import { SectionHeading } from "../../../components/site/SectionHeading";
import { SiteShell } from "../../../components/site/SiteShell";
import { getSustainabilityPageContent } from "../../../content";
import { mediaAssets } from "../../../content/media-assets";
import type { HeroAction } from "../../../content/types";
import {
  defaultLocale,
  isSupportedLocale,
  locales,
  type Locale,
} from "../../../lib/i18n";
import styles from "./page.module.css";

type SustainabilityPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: SustainabilityPageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : defaultLocale;
  const pageContent = getSustainabilityPageContent(safeLocale);

  return {
    title: pageContent.metadata.title,
    description: pageContent.metadata.description,
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function SustainabilityPage({
  params,
}: SustainabilityPageProps) {
  const { locale } = await params;
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : defaultLocale;
  const pageContent = getSustainabilityPageContent(safeLocale);

  const heroActions = [
    {
      href: "#environmental-responsibility",
      label: pageContent.hero.primaryLabel,
      variant: "primary",
    },
    {
      href: "#future-outlook",
      label: pageContent.hero.secondaryLabel,
      variant: "secondary",
    },
  ] satisfies HeroAction[];

  const heroSlides = mediaAssets.sustainabilityHeroSlides.map((slide) => slide.src) as readonly string[];

  return (
    <main className={styles.page}>
      <ApplicationSlider
        alt="Pluto Enerji sustainability hero background"
        className={styles.heroStage}
        baseImage={heroSlides[0]}
        images={heroSlides}
        intervalMs={4800}
        overlayClassName={styles.heroOverlay}
        priority
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
          descriptionClassName={styles.heroDescription}
          noticeClassName={styles.heroNotice}
          actionPrimaryClassName={styles.heroActionPrimary}
          actionSecondaryClassName={styles.heroActionSecondary}
          highlightCardClassName={styles.heroHighlightCard}
          highlightTitleClassName={styles.heroHighlightTitle}
          highlightDescriptionClassName={styles.heroHighlightDescription}
        />
      </ApplicationSlider>

      <section className={styles.fullBleedSection}>
        <ApplicationSlider
          alt="Pluto Enerji long-term value background"
          className={styles.overviewStage}
          images={[mediaAssets.sustainabilityOverviewImage.src]}
          overlayClassName={styles.overviewOverlay}
          sizes="100vw"
        >
          <SiteShell>
            <div className={styles.overviewStageContent}>
              <div className={styles.overviewGrid}>
                <SectionHeading
                  eyebrow=""
                  title={pageContent.overview.section.title}
                  description={pageContent.overview.section.description}
                  className={styles.overviewHeading}
                  titleClassName={styles.stageTitle}
                  descriptionClassName={styles.stageDescription}
                />

                <div className={styles.overviewPanel} data-reveal="default">
                  {pageContent.overview.paragraphs.map((paragraph) => (
                    <p key={paragraph} className={styles.overviewParagraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </SiteShell>
        </ApplicationSlider>
      </section>

      <section className={styles.fullBleedSection} id="environmental-responsibility">
        <ApplicationSlider
          alt="Pluto Enerji environmental responsibility background"
          className={styles.responsibilityStage}
          baseImage={mediaAssets.sustainabilityOverviewImage.src}
          images={[mediaAssets.sustainabilityResponsibilityImage.src]}
          overlayClassName={styles.responsibilityOverlay}
          sizes="100vw"
        >
          <SiteShell>
            <div className={styles.responsibilityStageContent}>
              <div className={styles.responsibilityGrid}>
                <SectionHeading
                  eyebrow={pageContent.responsibility.section.eyebrow}
                  title={pageContent.responsibility.section.title}
                  description={pageContent.responsibility.section.description}
                  className={styles.responsibilityHeading}
                  eyebrowClassName={styles.stageEyebrow}
                  titleClassName={styles.stageTitle}
                  descriptionClassName={styles.stageDescription}
                />

                <div className={styles.responsibilityCard} data-reveal="default">
                  <p className={styles.responsibilityLead}>
                    {pageContent.responsibility.prioritiesLead}
                  </p>

                  <ul className={styles.priorityList}>
                    {pageContent.responsibility.priorities.map((item) => (
                      <li key={item} className={styles.priorityItem}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className={styles.responsibilityClosing}>
                    {pageContent.responsibility.closing}
                  </p>
                </div>
              </div>
            </div>
          </SiteShell>
        </ApplicationSlider>
      </section>

      <section className={styles.fullBleedSection}>
        <ApplicationSlider
          alt="Pluto Enerji ESG pillars background"
          className={styles.pillarsStage}
          images={[mediaAssets.sustainabilityPillarsImage.src]}
          overlayClassName={styles.pillarsOverlay}
          sizes="100vw"
        >
          <SiteShell>
            <section className={styles.section}>
              <SectionHeading
                eyebrow=""
                title={pageContent.pillars.section.title}
                description={pageContent.pillars.section.description}
                className={styles.sectionHeadingCentered}
                titleClassName={styles.pillarsHeadingTitle}
                descriptionClassName={styles.sectionHeadingCenteredDescription}
              />

              <div className={styles.pillarGrid}>
                {pageContent.pillars.cards.map((card) => (
                  <article
                    key={card.title}
                    className={`${styles.pillarCard} ${card.points?.length ? styles.pillarCardWithList : ""}`}
                    data-reveal="stagger"
                  >
                    <h2 className={styles.pillarTitle}>{card.title}</h2>

                    <div className={styles.pillarBody}>
                      {card.paragraphs.map((paragraph) => (
                        <p key={paragraph} className={styles.pillarParagraph}>
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {card.points?.length ? (
                      <ul className={styles.pillarList}>
                        {card.points.map((item) => (
                          <li key={item} className={styles.pillarItem}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          </SiteShell>
        </ApplicationSlider>
      </section>

      <section className={styles.fullBleedSection} id="future-outlook">
        <ApplicationSlider
          alt="Pluto Enerji future outlook background"
          className={styles.futureStage}
          images={[mediaAssets.sustainabilityFutureImage.src]}
          overlayClassName={styles.futureOverlay}
          sizes="100vw"
        >
          <SiteShell>
            <div className={styles.futureStageContent}>
              <div className={styles.futureGrid}>
                <SectionHeading
                  eyebrow={pageContent.future.section.eyebrow}
                  title={pageContent.future.section.title}
                  description={pageContent.future.section.description}
                  className={styles.futureHeading}
                  eyebrowClassName={styles.stageEyebrow}
                  titleClassName={styles.stageTitle}
                  descriptionClassName={styles.stageDescription}
                />

                <div className={styles.futurePanel} data-reveal="default">
                  {pageContent.future.paragraphs.map((paragraph) => (
                    <p key={paragraph} className={styles.futureParagraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </SiteShell>
        </ApplicationSlider>
      </section>
    </main>
  );
}
