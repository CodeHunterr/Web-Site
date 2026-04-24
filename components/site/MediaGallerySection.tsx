"use client";

import { useState } from "react";

import type { GalleryItem } from "../../content/types";
import { ImageLightbox } from "./ImageLightbox";
import { MediaGalleryImage } from "./MediaGalleryImage";
import { SectionHeading } from "./SectionHeading";

type MediaGallerySectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  items: ReadonlyArray<GalleryItem>;
  sectionClassName?: string;
  headingClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  gridClassName?: string;
  cardClassName?: string;
  visualClassName?: string;
  cardTitleClassName?: string;
  cardDescriptionClassName?: string;
};

function joinClasses(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function MediaGallerySection({
  id,
  eyebrow,
  title,
  description,
  items,
  sectionClassName,
  headingClassName,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
  gridClassName,
  cardClassName,
  visualClassName,
  cardTitleClassName,
  cardDescriptionClassName,
}: MediaGallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <>
      <section className={joinClasses(sectionClassName)} id={id}>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          className={joinClasses(headingClassName)}
          eyebrowClassName={joinClasses(eyebrowClassName)}
          titleClassName={joinClasses(titleClassName)}
          descriptionClassName={joinClasses(descriptionClassName)}
        />

        <div className={joinClasses(gridClassName)}>
          {items.map((item) => (
            <article key={item.title} className={joinClasses(cardClassName)} data-reveal="stagger">
              <MediaGalleryImage
                alt={item.alt ?? item.title}
                className={joinClasses(visualClassName)}
                label={item.title}
                onClick={() => setSelectedImage(item)}
                src={item.src}
              />
              <h3 className={joinClasses(cardTitleClassName)}>{item.title}</h3>
              <p className={joinClasses(cardDescriptionClassName)}>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ImageLightbox
        alt={selectedImage?.alt ?? selectedImage?.title ?? ""}
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        src={selectedImage?.src ?? ""}
      />
    </>
  );
}
