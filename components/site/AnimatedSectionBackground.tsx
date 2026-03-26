import Image from "next/image";
import type { ReactNode } from "react";

import styles from "./AnimatedSectionBackground.module.css";

type AnimatedSectionBackgroundProps = {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  imageClassName?: string;
  overlayClassName?: string;
  priority?: boolean;
  sizes?: string;
};

function joinClasses(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function AnimatedSectionBackground({
  src,
  alt,
  children,
  className,
  contentClassName,
  imageClassName,
  overlayClassName,
  priority = false,
  sizes = "100vw",
}: AnimatedSectionBackgroundProps) {
  return (
    <div className={joinClasses(styles.wrapper, className)} data-parallax>
      <div aria-hidden="true" className={styles.mediaLayer}>
        <Image
          alt={alt}
          className={joinClasses(styles.image, imageClassName)}
          fill
          priority={priority}
          sizes={sizes}
          src={src}
        />
      </div>

      <div aria-hidden="true" className={joinClasses(styles.overlay, overlayClassName)} />

      <div className={joinClasses(styles.content, contentClassName)}>{children}</div>
    </div>
  );
}
