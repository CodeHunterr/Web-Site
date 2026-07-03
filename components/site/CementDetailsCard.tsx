"use client";

import { useState } from "react";

import styles from "./CementDetailsCard.module.css";

type CementDetailsCardProps = {
  title: string;
  description: string;
  features: ReadonlyArray<string>;
  detailLabel: string;
  collapseLabel: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
};

function joinClasses(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function CementDetailsCard({
  title,
  description,
  features,
  detailLabel,
  collapseLabel,
  className,
  titleClassName,
  descriptionClassName,
  buttonClassName,
}: CementDetailsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={joinClasses(
        className,
        styles.cardRoot,
        isExpanded ? styles.cardExpanded : undefined,
      )}
      data-reveal="stagger"
    >
      <h3 className={joinClasses(titleClassName)}>{title}</h3>
      <p className={joinClasses(descriptionClassName)}>{description}</p>

      <div className={styles.cardFooter}>
        <button
          aria-expanded={isExpanded}
          className={joinClasses(styles.detailButton, buttonClassName)}
          onClick={() => setIsExpanded((current) => !current)}
          type="button"
        >
          <span>{isExpanded ? collapseLabel : detailLabel}</span>
          <span
            aria-hidden="true"
            className={joinClasses(
              styles.detailCaret,
              isExpanded ? styles.detailCaretOpen : undefined,
            )}
          >
            ↓
          </span>
        </button>
      </div>

      <div
        className={joinClasses(
          styles.expandedWrap,
          isExpanded ? styles.expandedWrapOpen : styles.expandedWrapClosed,
        )}
      >
        <div className={styles.expandedInner}>
          <ul className={styles.expandedList}>
            {features.map((feature) => (
              <li key={feature} className={styles.expandedItem}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
