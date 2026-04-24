"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./MediaGalleryImage.module.css";

type MediaGalleryImageProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  sizes?: string;
  onClick?: () => void;
};

function joinClasses(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function MediaGalleryImage({
  src,
  alt,
  label,
  className,
  sizes,
  onClick,
}: MediaGalleryImageProps) {
  const [hasError, setHasError] = useState(false);
  const normalizedSrc = src.trim();

  useEffect(() => {
    setHasError(false);
  }, [normalizedSrc]);

  return (
    <button
      className={joinClasses(styles.frame, className)}
      onClick={onClick}
      type="button"
    >
      {hasError || !normalizedSrc ? (
        <div className={styles.fallback}>{label ?? alt}</div>
      ) : (
        <Image
          alt={alt}
          className={styles.image}
          fill
          onError={() => setHasError(true)}
          sizes={sizes ?? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"}
          src={normalizedSrc}
        />
      )}

      {label ? <span className={styles.overlay}>{label}</span> : null}
    </button>
  );
}
