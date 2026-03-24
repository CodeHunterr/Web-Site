import type { Metadata } from "next";

import { ContactFormCard } from "../../../components/site/ContactFormCard";
import { PageHero } from "../../../components/site/PageHero";
import { SectionHeading } from "../../../components/site/SectionHeading";
import { SiteShell } from "../../../components/site/SiteShell";
import { SurfaceCard } from "../../../components/site/SurfaceCard";
import { companyInfo, getContactPageContent } from "../../../content";
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
      />

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
