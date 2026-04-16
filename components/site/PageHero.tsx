import type {
  GalleryItem,
  HeroAction,
  HeroSocialLink,
  HighlightItem,
} from "../../content/types";
import { MediaGalleryImage } from "./MediaGalleryImage";
import { SiteShell } from "./SiteShell";
import { SurfaceCard } from "./SurfaceCard";
import styles from "./PageHero.module.css";

type HeroLead = {
  kicker: string;
  description: string;
};

type PageHeroProps = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  notice: string;
  actions: ReadonlyArray<HeroAction>;
  socialTitle?: string;
  socialLinks?: ReadonlyArray<HeroSocialLink>;
  highlights: ReadonlyArray<HighlightItem>;
  media?: GalleryItem;
  lead?: HeroLead;
  frameless?: boolean;
  sectionClassName?: string;
  cardClassName?: string;
  contentClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  actionsClassName?: string;
  actionPrimaryClassName?: string;
  actionSecondaryClassName?: string;
  noticeClassName?: string;
  plainHighlights?: boolean;
  highlightCardClassName?: string;
  highlightTitleClassName?: string;
  highlightDescriptionClassName?: string;
};

function joinClasses(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function PageHero({
  eyebrow,
  titleLine1,
  titleLine2,
  description,
  notice,
  actions,
  socialTitle,
  socialLinks = [],
  highlights,
  media,
  lead,
  frameless = false,
  sectionClassName,
  cardClassName,
  contentClassName,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
  actionsClassName,
  actionPrimaryClassName,
  actionSecondaryClassName,
  noticeClassName,
  plainHighlights = false,
  highlightCardClassName,
  highlightTitleClassName,
  highlightDescriptionClassName,
}: PageHeroProps) {
  const hasTitleLine1 = titleLine1.trim().length > 0;
  const hasTitleLine2 = titleLine2.trim().length > 0;
  const hasTitle = hasTitleLine1 || hasTitleLine2;
  const hasEyebrow = eyebrow.trim().length > 0;
  const hasDescription = description.trim().length > 0;
  const hasNotice = notice.trim().length > 0;
  const hasActions = actions.length > 0;
  const hasSocialTitle = socialTitle?.trim().length;
  const hasSocialLinks = socialLinks.length > 0;

  const renderSocialIcon = (platform: HeroSocialLink["platform"]) => {
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
    <section className={joinClasses(styles.section, sectionClassName)}>
      <SiteShell>
        <div
          className={joinClasses(
            styles.card,
            frameless ? styles.cardFrameless : undefined,
            cardClassName,
          )}
        >
          <div className={styles.grid}>
            <div className={joinClasses(styles.content, contentClassName)}>
              {hasEyebrow ? (
                <p className={joinClasses(styles.eyebrow, eyebrowClassName)}>{eyebrow}</p>
              ) : null}
              {hasTitle ? (
                <h1 className={joinClasses(styles.title, titleClassName)}>
                  {hasTitleLine1 ? (
                    <>
                      {titleLine1}
                      {hasTitleLine2 ? <br /> : null}
                    </>
                  ) : null}
                  {titleLine2}
                </h1>
              ) : null}
              {hasDescription ? (
                <p className={joinClasses(styles.description, descriptionClassName)}>{description}</p>
              ) : null}

              {hasSocialTitle || hasSocialLinks ? (
                <div className={styles.socialBlock}>
                  {hasSocialTitle ? (
                    <p className={styles.socialTitle}>{socialTitle}</p>
                  ) : null}

                  {hasSocialLinks ? (
                    <div className={styles.socialList}>
                      {socialLinks.map((item) => (
                        <div
                          key={`${item.platform}-${item.href}`}
                          className={styles.socialItem}
                        >
                          {renderSocialIcon(item.platform)}
                          <span className={styles.socialLabel}>{item.label}</span>
                          <a
                            className={styles.socialLink}
                            href={item.href}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {item.href}
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}

              {hasActions ? (
                <div className={joinClasses(styles.actions, actionsClassName)}>
                  {actions.map((action) => (
                    <a
                      key={`${action.label}-${action.href}`}
                      className={joinClasses(
                        styles.actionLink,
                        action.variant === "primary"
                          ? styles.actionPrimary
                          : styles.actionSecondary,
                        action.variant === "primary"
                          ? actionPrimaryClassName
                          : actionSecondaryClassName,
                      )}
                      href={action.href}
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              ) : null}

              {hasNotice ? (
                <div className={joinClasses(styles.notice, noticeClassName)}>{notice}</div>
              ) : null}
            </div>

            <aside className={styles.aside}>
              {media ? (
                <div className={styles.mediaCard}>
                  <MediaGalleryImage
                    alt={media.alt ?? media.title}
                    className={styles.mediaFrame}
                    label={media.title}
                    sizes="(max-width: 1024px) 100vw, 34vw"
                    src={media.src}
                  />
                </div>
              ) : null}

              {lead ? (
                <div className={styles.leadCard}>
                  <p className={styles.leadKicker}>{lead.kicker}</p>
                  <p className={styles.leadDescription}>{lead.description}</p>
                </div>
              ) : null}

              <div className={styles.highlightGrid}>
                {highlights.map((item) =>
                  plainHighlights ? (
                    <article
                      key={item.title}
                      className={joinClasses(styles.highlightPlain, highlightCardClassName)}
                    >
                      <h2
                        className={joinClasses(
                          styles.highlightTitle,
                          highlightTitleClassName,
                        )}
                      >
                        {item.title}
                      </h2>
                      <p
                        className={joinClasses(
                          styles.highlightDescription,
                          highlightDescriptionClassName,
                        )}
                      >
                        {item.description}
                      </p>
                    </article>
                  ) : (
                    <SurfaceCard
                      key={item.title}
                      title={item.title}
                      description={item.description}
                      className={joinClasses(styles.highlightCard, highlightCardClassName)}
                      titleClassName={joinClasses(styles.highlightTitle, highlightTitleClassName)}
                      descriptionClassName={joinClasses(
                        styles.highlightDescription,
                        highlightDescriptionClassName,
                      )}
                    />
                  ),
                )}
              </div>
            </aside>
          </div>
        </div>
      </SiteShell>
    </section>
  );
}
