type FeatureListCardProps = {
  title: string;
  description: string;
  features: ReadonlyArray<string>;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  listClassName?: string;
  itemClassName?: string;
};

function joinClasses(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function FeatureListCard({
  title,
  description,
  features,
  className,
  titleClassName,
  descriptionClassName,
  listClassName,
  itemClassName,
}: FeatureListCardProps) {
  return (
    <article className={joinClasses(className)} data-reveal="stagger">
      <h3 className={joinClasses(titleClassName)}>{title}</h3>
      <p className={joinClasses(descriptionClassName)}>{description}</p>
      <ul className={joinClasses(listClassName)}>
        {features.map((feature) => (
          <li key={feature} className={joinClasses(itemClassName)}>
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
