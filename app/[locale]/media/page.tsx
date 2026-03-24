import type { Metadata } from "next";

import { MediaGallerySection } from "../../../components/site/MediaGallerySection";
import { MediaVideoEmbed } from "../../../components/site/MediaVideoEmbed";
import { PageHero } from "../../../components/site/PageHero";
import { SectionHeading } from "../../../components/site/SectionHeading";
import { SiteShell } from "../../../components/site/SiteShell";
import { getMediaPageContent } from "../../../content";
import type { HeroAction } from "../../../content/types";
import {
  defaultLocale,
  isSupportedLocale,
  locales,
  type Locale,
} from "../../../lib/i18n";
import styles from "./page.module.css";

type MediaPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: MediaPageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : defaultLocale;
  const pageContent = getMediaPageContent(safeLocale);

  return {
    title: pageContent.metadata.title,
    description: pageContent.metadata.description,
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function MediaPage({ params }: MediaPageProps) {
  const { locale } = await params;
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : defaultLocale;
  const pageContent = getMediaPageContent(safeLocale);

  const heroActions = [
    {
      href: "#quarry",
      label: pageContent.hero.secondaryLabel,
      variant: "secondary",
    },
  ] satisfies HeroAction[];
  const hasVideoDescription = pageContent.video.embedDescription.trim().length > 0;
  const mediaHeroTitleClassName =
    safeLocale === "tr"
      ? `${styles.heroTitle} ${styles.heroTitleTr}`
      : styles.heroTitle;

  return (
    <main className={styles.page}>
      <PageHero
        eyebrow={pageContent.hero.eyebrow}
        titleLine1={pageContent.hero.titleLine1}
        titleLine2={pageContent.hero.titleLine2}
        description={pageContent.hero.description}
        notice={pageContent.hero.notice}
        actions={heroActions}
        socialTitle={pageContent.heroSocial.title}
        socialLinks={pageContent.heroSocial.links}
        highlights={pageContent.heroHighlights}
        media={pageContent.heroImage}
        titleClassName={mediaHeroTitleClassName}
      />

      <SiteShell>
        <MediaGallerySection
          id="quarry"
          eyebrow={pageContent.sections.quarry.eyebrow}
          title={pageContent.sections.quarry.title}
          description={pageContent.sections.quarry.description}
          items={pageContent.sections.quarry.galleryImages}
          sectionClassName={styles.section}
          headingClassName={styles.sectionHeading}
          gridClassName={styles.galleryGrid}
          cardClassName={styles.galleryCard}
          visualClassName={styles.mediaVisual}
          cardTitleClassName={styles.cardTitle}
          cardDescriptionClassName={styles.cardDescription}
        />

        <MediaGallerySection
          id="stock"
          eyebrow={pageContent.sections.stock.eyebrow}
          title={pageContent.sections.stock.title}
          description={pageContent.sections.stock.description}
          items={pageContent.sections.stock.galleryImages}
          sectionClassName={styles.section}
          headingClassName={styles.sectionHeading}
          gridClassName={styles.galleryGrid}
          cardClassName={styles.galleryCard}
          visualClassName={styles.mediaVisual}
          cardTitleClassName={styles.cardTitle}
          cardDescriptionClassName={styles.cardDescription}
        />

        <MediaGallerySection
          id="operations"
          eyebrow={pageContent.sections.operations.eyebrow}
          title={pageContent.sections.operations.title}
          description={pageContent.sections.operations.description}
          items={pageContent.sections.operations.galleryImages}
          sectionClassName={styles.section}
          headingClassName={styles.sectionHeading}
          gridClassName={styles.galleryGrid}
          cardClassName={styles.galleryCard}
          visualClassName={styles.mediaVisual}
          cardTitleClassName={styles.cardTitle}
          cardDescriptionClassName={styles.cardDescription}
        />

        <section className={styles.section} id="video">
          <div className={styles.videoSection}>
            <SectionHeading
              eyebrow={pageContent.video.eyebrow}
              title={pageContent.video.title}
              description={pageContent.video.description}
              className={styles.sectionHeading}
            />

            <MediaVideoEmbed
              className={styles.videoEmbed}
              fallbackLabel={pageContent.video.embedLabel}
              src={pageContent.videoUrl}
              title={pageContent.video.embedLabel}
            />

            <div className={styles.videoMeta}>
              <strong className={styles.videoTitle}>{pageContent.video.embedLabel}</strong>
              {hasVideoDescription ? (
                <p className={styles.videoDescription}>{pageContent.video.embedDescription}</p>
              ) : null}
            </div>
          </div>
        </section>
      </SiteShell>
    </main>
  );
}
