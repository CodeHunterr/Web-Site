"use client";

import Image from "next/image";
import { useEffect } from "react";

import styles from "./ImageLightbox.module.css";

type ImageLightboxProps = {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
};

export function ImageLightbox({
  src,
  alt,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
    >
      <div className={styles.dialog} onClick={(event) => event.stopPropagation()}>
        <div className={styles.imageWrap}>
          <Image
            alt={alt}
            className={styles.image}
            fill
            sizes="90vw"
            src={src}
          />
        </div>
      </div>
    </div>
  );
}
