import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

function joinClasses(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const hasEyebrow = eyebrow.trim().length > 0;
  const hasDescription = description.trim().length > 0;

  return (
    <div className={joinClasses(styles.root, className)} data-reveal="default">
      {hasEyebrow ? (
        <p className={joinClasses(styles.eyebrow, eyebrowClassName)}>{eyebrow}</p>
      ) : null}
      <h2 className={joinClasses(styles.title, titleClassName)}>{title}</h2>
      {hasDescription ? (
        <p className={joinClasses(styles.description, descriptionClassName)}>{description}</p>
      ) : null}
    </div>
  );
}
