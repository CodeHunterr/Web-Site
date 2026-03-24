import type { Metadata } from "next";

import { SiteShell } from "../../../components/site/SiteShell";
import { getKaolinPageContent } from "../../../content";
import {
  defaultLocale,
  isSupportedLocale,
  locales,
  type Locale,
} from "../../../lib/i18n";
import styles from "./page.module.css";

type KaolinPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: KaolinPageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : defaultLocale;
  const pageContent = getKaolinPageContent(safeLocale);

  return {
    title: pageContent.metadata.title,
    description: pageContent.metadata.description,
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type ContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

function getContentBlocks(value: string): ContentBlock[] {
  return value
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const lines = block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      if (lines.length > 0 && lines.every((line) => line.startsWith("- "))) {
        return {
          type: "list",
          items: lines.map((line) => line.replace(/^- /, "").trim()),
        } satisfies ContentBlock;
      }

      return {
        type: "paragraph",
        text: lines.join(" "),
      } satisfies ContentBlock;
    });
}

export default async function KaolinPage({ params }: KaolinPageProps) {
  const { locale } = await params;
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : defaultLocale;
  const pageContent = getKaolinPageContent(safeLocale);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <img
          alt=""
          aria-hidden="true"
          className={styles.heroImage}
          src={pageContent.hero.backgroundImage}
        />
        <SiteShell>
          <div className={styles.heroInner}>
            {pageContent.hero.title ? (
              <h1 className={styles.heroTitle}>{pageContent.hero.title}</h1>
            ) : null}
            <p className={styles.heroDescription}>{pageContent.hero.description}</p>
          </div>
        </SiteShell>
      </section>

      <SiteShell>
        <section className={styles.section}>
          <div className={styles.sectionGrid}>
            {pageContent.sections.map((section) => (
              <article key={section.id} className={styles.topicCard} id={section.id}>
                <h2 className={styles.topicTitle}>{section.title}</h2>
                {section.body ? (
                  <div className={styles.bodyGroup}>
                    {getContentBlocks(section.body).map((block, index) =>
                      block.type === "paragraph" ? (
                        <p
                          key={`${section.id}-paragraph-${index}`}
                          className={styles.topicBody}
                        >
                          {block.text}
                        </p>
                      ) : (
                        <ul
                          key={`${section.id}-list-${index}`}
                          className={styles.topicList}
                        >
                          {block.items.map((item) => (
                            <li
                              key={`${section.id}-${item}`}
                              className={styles.topicListItem}
                            >
                              <span
                                aria-hidden="true"
                                className={styles.topicListDot}
                              />
                              <span className={styles.topicListText}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ),
                    )}
                  </div>
                ) : (
                  <div aria-hidden="true" className={styles.topicPlaceholder} />
                )}
              </article>
            ))}
          </div>
        </section>
      </SiteShell>
    </main>
  );
}
