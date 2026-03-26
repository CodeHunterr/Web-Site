import type { CSSProperties } from "react";

import type {
  GalleryItem,
  HeroAction,
  HeroSocialLink,
  TextCard,
} from "../../content/types";
import { SiteShell } from "./SiteShell";
import styles from "./HomeHeroSlider.module.css";

type HomeHeroSliderProps = {
  titleLine1: string;
  titleLine2: string;
  description: string;
  notice: string;
  actions: ReadonlyArray<HeroAction>;
  slides: ReadonlyArray<GalleryItem>;
  lead?: {
    kicker: string;
    description: string;
  };
  infoItems?: ReadonlyArray<TextCard>;
  socialTitle?: string;
  socialLinks?: ReadonlyArray<HeroSocialLink>;
  slideDurationSeconds?: number;
  titleClassName?: string;
  innerClassName?: string;
  contentClassName?: string;
  socialBlockClassName?: string;
  infoGridClassName?: string;
  infoCardClassName?: string;
  splitLayout?: boolean;
};

function joinClasses(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function HomeHeroSlider({
  titleLine1,
  titleLine2,
  description,
  notice,
  actions,
  slides,
  lead,
  infoItems = [],
  socialTitle,
  socialLinks = [],
  slideDurationSeconds = 4,
  titleClassName,
  innerClassName,
  contentClassName,
  socialBlockClassName,
  infoGridClassName,
  infoCardClassName,
  splitLayout = false,
}: HomeHeroSliderProps) {
  const hasTitleLine1 = titleLine1.trim().length > 0;
  const hasTitleLine2 = titleLine2.trim().length > 0;
  const hasDescription = description.trim().length > 0;
  const hasNotice = notice.trim().length > 0;
  const hasLead = lead ? lead.description.trim().length > 0 : false;
  const hasActions = actions.length > 0;
  const hasInfoItems = infoItems.length > 0;
  const hasSocialTitle = socialTitle?.trim().length;
  const hasSocialLinks = socialLinks.length > 0;
  const sliderDuration = `${Math.max(slides.length, 1) * slideDurationSeconds}s`;

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
    <section
      data-parallax
      className={styles.section}
      style={{ "--slider-duration": sliderDuration } as CSSProperties}
    >
      <div aria-hidden="true" className={styles.sliderTrack}>
        {slides.map((slide, index) => (
          <div
            key={`${slide.src}-${index}`}
            className={joinClasses(styles.slide, index === 0 ? styles.slideFirst : undefined)}
            style={
              {
                "--slide-delay": `${index * slideDurationSeconds - slideDurationSeconds * 0.2}s`,
                backgroundImage: `url(${slide.src})`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div aria-hidden="true" className={styles.overlay} />
      <div aria-hidden="true" className={styles.overlayGlow} />

      <SiteShell className={styles.shell}>
        <div
          className={joinClasses(
            styles.inner,
            splitLayout ? styles.innerSplit : undefined,
            innerClassName,
          )}
        >
          <div className={joinClasses(styles.content, contentClassName)}>
            <h1 className={joinClasses(styles.title, titleClassName)}>
              {hasTitleLine1 ? (
                <>
                  {titleLine1}
                  {hasTitleLine2 ? <br /> : null}
                </>
              ) : null}
              {titleLine2}
            </h1>

            {hasDescription ? (
              <p className={styles.description}>{description}</p>
            ) : null}

            {hasSocialTitle || hasSocialLinks ? (
              <div className={joinClasses(styles.socialBlock, socialBlockClassName)}>
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

            {hasNotice ? <div className={styles.notice}>{notice}</div> : null}

            {hasActions ? (
              <div className={styles.actions}>
                {actions.map((action) => (
                  <a
                    key={`${action.label}-${action.href}`}
                    className={joinClasses(
                      styles.actionLink,
                      action.variant === "primary"
                        ? styles.actionPrimary
                        : styles.actionSecondary,
                    )}
                    href={action.href}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            ) : null}

            {hasLead ? (
              <div className={styles.leadPanel}>
                <p className={styles.leadKicker}>{lead?.kicker}</p>
                <p className={styles.leadDescription}>{lead?.description}</p>
              </div>
            ) : null}
          </div>

          {hasInfoItems ? (
            <div className={joinClasses(styles.infoGrid, infoGridClassName)}>
              {infoItems.map((item) => (
                <article
                  key={item.title}
                  className={joinClasses(styles.infoCard, infoCardClassName)}
                  data-reveal="stagger"
                >
                  <h2 className={styles.infoTitle}>{item.title}</h2>
                  <p className={styles.infoDescription}>{item.description}</p>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </SiteShell>
    </section>
  );
}
