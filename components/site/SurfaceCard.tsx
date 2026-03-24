import styles from "./SurfaceCard.module.css";

type SurfaceCardProps = {
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

function joinClasses(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function SurfaceCard({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: SurfaceCardProps) {
  return (
    <article className={joinClasses(styles.root, className)}>
      <h3 className={joinClasses(styles.title, titleClassName)}>{title}</h3>
      <p className={joinClasses(styles.description, descriptionClassName)}>{description}</p>
    </article>
  );
}
