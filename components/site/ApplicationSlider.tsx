"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";

import styles from "./ApplicationSlider.module.css";

type ApplicationSliderProps = {
  images: readonly string[];
  alt: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  overlayClassName?: string;
  sizes?: string;
  priority?: boolean;
  intervalMs?: number;
};

function joinClasses(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function ApplicationSlider({
  images,
  alt,
  children,
  className,
  contentClassName,
  overlayClassName,
  sizes = "100vw",
  priority = false,
  intervalMs = 4500,
}: ApplicationSliderProps) {
  const safeImages = images.length > 0 ? images : ["/images/Application/a-1.jpeg"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (safeImages.length < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeImages.length);
    }, intervalMs);

    return () => window.clearInterval(intervalId);
  }, [intervalMs, safeImages.length]);

  return (
    <div className={joinClasses(styles.wrapper, className)} data-parallax>
      <div aria-hidden="true" className={styles.mediaLayer}>
        {safeImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className={joinClasses(
              styles.slide,
              index === activeIndex ? styles.slideActive : styles.slideInactive,
            )}
            style={{ "--slide-zoom-duration": "7s" } as CSSProperties}
          >
            <Image
              alt={alt}
              className={styles.image}
              fill
              priority={priority && index === 0}
              sizes={sizes}
              src={src}
            />
          </div>
        ))}
      </div>

      <div aria-hidden="true" className={joinClasses(styles.overlay, overlayClassName)} />

      <div className={joinClasses(styles.content, contentClassName)}>{children}</div>
    </div>
  );
}
