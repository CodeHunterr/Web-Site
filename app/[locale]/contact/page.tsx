import type { CSSProperties } from "react";
import type { Metadata } from "next";

import { ContactFormCard } from "../../../components/site/ContactFormCard";
import { PageHero } from "../../../components/site/PageHero";
import { SectionHeading } from "../../../components/site/SectionHeading";
import { SiteShell } from "../../../components/site/SiteShell";
import { SurfaceCard } from "../../../components/site/SurfaceCard";
import { companyInfo, getContactPageContent } from "../../../content";
import { mediaAssets } from "../../../content/media-assets";
import type { HeroAction } from "../../../content/types";
import {
  defaultLocale,
  isSupportedLocale,
  locales,
  type Locale,
} from "../../../lib/i18n";
import styles from "./page.module.css";

type ContactPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : defaultLocale;
  const pageContent = getContactPageContent(safeLocale);

  return {
    title: pageContent.metadata.title,
    description: pageContent.metadata.description,
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : defaultLocale;
  const pageContent = getContactPageContent(safeLocale);

  const heroActions = [
    {
      href: "#contact-form",
      label: pageContent.hero.primaryLabel,
      variant: "primary",
    },
    {
      href: "#company",
      label: pageContent.hero.secondaryLabel,
      variant: "secondary",
    },
  ] satisfies HeroAction[];

  const formatSocialUrl = (href: string) =>
    href
      .replace(/^https?:\/\/(www\.)?/i, "")
      .replace(/^linkedin\.com\/company\//i, "linkedin.com/");

  const renderSocialIcon = (platform: "linkedin" | "instagram") => {
    if (platform === "linkedin") {
      return (
        <svg
          aria-hidden="true"
          className={styles.socialIcon}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M7 9.5V17M7 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 10V9.5m0 0v1.1c.6-.8 1.5-1.3 2.7-1.3 2 0 3.3 1.3 3.3 4V17m-6-7.5h6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    }

    return (
      <svg
        aria-hidden="true"
        className={styles.socialIcon}
        fill="none"
        viewBox="0 0 24 24"
      >
        <rect
          height="13"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.8"
          width="13"
          x="5.5"
          y="5.5"
        />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.6" cy="7.4" fill="currentColor" r="1" />
      </svg>
    );
  };

  return (
    <main className={styles.page}>
      <div
        className={styles.heroWrap}
        style={
          { "--contact-hero-image": `url(${mediaAssets.contactHeroImage.src})` } as CSSProperties
        }
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
          sectionClassName={styles.heroSection}
          cardClassName={styles.heroCard}
          titleClassName={styles.heroTitle}
          plainHighlights
          highlightCardClassName={styles.heroHighlightCard}
          highlightTitleClassName={styles.heroHighlightTitle}
          highlightDescriptionClassName={styles.heroHighlightDescription}
        />
      </div>

      <SiteShell>
        <section className={styles.section}>
          <div className={styles.contactLayout}>
            <div className={styles.companyPanel} id="company">
              <SectionHeading
                eyebrow={pageContent.company.section.eyebrow}
                title={pageContent.company.section.title}
                description={pageContent.company.section.description}
                className={styles.sectionHeading}
              />

              <div className={styles.detailList}>
                {pageContent.company.details.map((item) => (
                  <div key={item.label} className={styles.detailItem}>
                    <span className={styles.detailLabel}>{item.label}</span>
                    {item.href ? (
                      <a className={styles.detailValueLink} href={item.href}>
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles.detailValue}>{item.value}</span>
                    )}
                  </div>
                ))}

                <div className={`${styles.detailItem} ${styles.socialBlock}`}>
                  <span className={`${styles.detailLabel} ${styles.socialBlockTitle}`}>
                    {pageContent.company.socialTitle}
                  </span>

                  <div className={styles.socialList}>
                    {pageContent.company.socialLinks.map((item) => (
                      <a
                        key={`${item.platform}-${item.href}`}
                        className={styles.socialLink}
                        href={item.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {renderSocialIcon(item.platform)}
                        <span className={styles.socialUrl}>
                          {formatSocialUrl(item.href)}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <p className={styles.companySummary}>{pageContent.company.summary}</p>
            </div>

            <div className={styles.formPanel} id="contact-form">
              <ContactFormCard
                title={pageContent.form.title}
                description={pageContent.form.description}
                fields={pageContent.form.fields}
                messages={pageContent.form.messages}
                submitLabel={pageContent.form.submitLabel}
                className={styles.formCard}
                headingClassName={styles.formHeading}
                titleClassName={styles.formTitle}
                descriptionClassName={styles.formDescription}
                formClassName={styles.formGrid}
                fieldClassName={styles.field}
                fieldFullWidthClassName={styles.fieldFullWidth}
                fieldControlClassName={styles.fieldControl}
                fieldInvalidClassName={styles.fieldInvalid}
                labelClassName={styles.fieldLabel}
                inputClassName={styles.input}
                textareaClassName={`${styles.input} ${styles.textarea}`}
                submitClassName={styles.submitButton}
                statusClassName={styles.formStatus}
                statusSuccessClassName={styles.formStatusSuccess}
                statusErrorClassName={styles.formStatusError}
                fieldHintClassName={styles.fieldHint}
              />

              <div className={styles.supportGrid}>
                {pageContent.supportCards.map((item) => (
                  <SurfaceCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    className={styles.supportCard}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </SiteShell>
    </main>
  );
}
