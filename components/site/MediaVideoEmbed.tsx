"use client";

import { useEffect, useState } from "react";

import styles from "./MediaVideoEmbed.module.css";

type MediaVideoEmbedProps = {
  src: string;
  title: string;
  fallbackLabel?: string;
  className?: string;
};

function joinClasses(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

function isLocalVideo(src: string) {
  return src.startsWith("/videos/") || /\.(mp4|webm|ogg)$/i.test(src);
}

export function MediaVideoEmbed({
  src,
  title,
  fallbackLabel,
  className,
}: MediaVideoEmbedProps) {
  const [hasError, setHasError] = useState(false);
  const normalizedSrc = src.trim();

  useEffect(() => {
    setHasError(false);
  }, [normalizedSrc]);

  if (!normalizedSrc || hasError) {
    return (
      <div className={joinClasses(styles.frame, className)}>
        <div className={styles.fallback}>{fallbackLabel ?? title}</div>
      </div>
    );
  }

  if (isLocalVideo(normalizedSrc)) {
    return (
      <div className={joinClasses(styles.frame, className)}>
        <video
          className={styles.video}
          controls
          onError={() => setHasError(true)}
          playsInline
          preload="metadata"
        >
          <source src={normalizedSrc} />
        </video>
      </div>
    );
  }

  return (
    <div className={joinClasses(styles.frame, className)}>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={styles.iframe}
        loading="lazy"
        src={normalizedSrc}
        title={title}
      />
    </div>
  );
}
