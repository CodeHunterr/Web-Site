import type { Locale } from "../lib/i18n";
import type { ContactFormFieldName } from "../lib/contact-form";

export type SiteNavItem = {
  label: string;
  path: string;
  hash?: string;
};

export type HeroAction = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
};

export type HeroSocialLink = {
  label: string;
  href: string;
  platform: "linkedin" | "instagram";
};

export type PageMetadata = {
  title: string;
  description: string;
};

export type HeroContent = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  notice: string;
  primaryLabel: string;
  secondaryLabel: string;
};

export type HighlightItem = {
  title: string;
  description: string;
};

export type TextCard = {
  title: string;
  description: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  features: string[];
};

export type GalleryItem = {
  title: string;
  description: string;
  src: string;
  alt?: string;
};

export type SectionContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ContactDetailItem = {
  label: string;
  value: string;
  href?: string;
};

export type FormFieldConfig = {
  name: ContactFormFieldName;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  placeholder: string;
  rows?: number;
  fullWidth?: boolean;
  required?: boolean;
};

export type ContactFormMessages = {
  success: string;
  error: string;
  sending: string;
  validationRequired: string;
  validationEmail: string;
};

export type SiteContent = {
  metadataTitle: string;
  siteDescription: string;
  brandTagline: string;
  companySummary: string;
  navigation: {
    primary: SiteNavItem[];
    localeLabels: Record<Locale, string>;
  };
  footer: {
    quickLinksTitle: string;
    contactTitle: string;
    addressLabel: string;
    emailLabel: string;
    phoneLabel: string;
    copyright: string;
  };
};

export type HomePageContent = {
  metadata: PageMetadata;
  hero: HeroContent;
  heroImage: GalleryItem;
  heroSlides: GalleryItem[];
  heroAside: {
    kicker: string;
    description: string;
  };
  heroInfoItems: TextCard[];
  supply: {
    section: SectionContent;
    primaryLabel: string;
    secondaryLabel: string;
    cards: TextCard[];
  };
  about: {
    section: SectionContent;
    narrative: string;
    points: string[];
  };
  applications: {
    section: SectionContent;
    cards: TextCard[];
  };
  contact: {
    section: SectionContent;
    primaryLabel: string;
    secondaryLabel: string;
    cards: TextCard[];
  };
};

export type KaolinPageContent = {
  metadata: PageMetadata;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    backgroundImage: string;
  };
  sections: Array<{
    id: string;
    title: string;
    body: string;
  }>;
};

export type ApplicationsPageContent = {
  metadata: PageMetadata;
  hero: HeroContent;
  heroHighlights: HighlightItem[];
  developmentApproach: SectionContent;
  sectors: FeatureCard[];
  supplyHighlight: {
    section: SectionContent;
    intro: string;
    supportLead: string;
    supports: string[];
    closing: string;
    ctaLabel: string;
  };
};

export type MediaPageContent = {
  metadata: PageMetadata;
  hero: HeroContent;
  heroSlides: GalleryItem[];
  heroSupportCards: TextCard[];
  heroSocial: {
    title: string;
    links: HeroSocialLink[];
  };
  sections: {
    quarry: SectionContent & { galleryImages: GalleryItem[] };
    stock: SectionContent & { galleryImages: GalleryItem[] };
  };
  video: {
    eyebrow: string;
    title: string;
    description: string;
    embedLabel: string;
    embedDescription: string;
  };
  videoUrl: string;
};

export type ContactPageContent = {
  metadata: PageMetadata;
  hero: HeroContent;
  heroHighlights: HighlightItem[];
  company: {
    section: SectionContent;
    summary: string;
    details: ContactDetailItem[];
    socialTitle: string;
    socialLinks: HeroSocialLink[];
  };
  form: {
    title: string;
    description: string;
    submitLabel: string;
    fields: FormFieldConfig[];
    messages: ContactFormMessages;
  };
  supportCards: TextCard[];
};

export type AboutPageContent = {
  metadata: PageMetadata;
  hero: HeroContent;
  heroHighlights: HighlightItem[];
  overview: {
    section: SectionContent;
    narrative: string;
    points: string[];
  };
  portfolio: {
    section: SectionContent;
    cards: TextCard[];
  };
  contact: {
    section: SectionContent;
    primaryLabel: string;
    secondaryLabel: string;
    cards: TextCard[];
  };
};
