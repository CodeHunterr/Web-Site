import type { Metadata } from "next";

import { HomeHeroSlider } from "../../../components/site/HomeHeroSlider";
import { MediaGallerySection } from "../../../components/site/MediaGallerySection";
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

  return (
    <main className={styles.page}>
      <HomeHeroSlider
        titleLine1={pageContent.hero.titleLine1}
        titleLine2={pageContent.hero.titleLine2}
        description={pageContent.hero.description}
        notice={pageContent.hero.notice}
        actions={heroActions}
        infoItems={pageContent.heroSupportCards}
        socialTitle={pageContent.heroSocial.title}
        socialLinks={pageContent.heroSocial.links}
        slides={pageContent.heroSlides}
        slideDurationSeconds={2}
        titleClassName={styles.heroTitle}
        contentClassName={styles.heroContent}
        socialBlockClassName={styles.heroSocialBlock}
        infoGridClassName={styles.heroInfoGrid}
        infoCardClassName={styles.heroInfoCard}
        splitLayout
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
          id="laboratory"
          eyebrow={pageContent.sections.laboratory.eyebrow}
          title={pageContent.sections.laboratory.title}
          description={pageContent.sections.laboratory.description}
          items={pageContent.sections.laboratory.galleryImages}
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

            <div className={styles.videoStack}>
              <div className={styles.videoWideWrap}>
                <video
                  className={styles.videoWide}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  src="/videos/lab-video.mp4"
                />
              </div>

              <div className={styles.videoWideWrap}>
                <video
                  className={styles.videoWide}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  src="/videos/lab-video-1_.mp4"
                />
              </div>
            </div>
          </div>
        </section>
      </SiteShell>
    </main>
  );
}
