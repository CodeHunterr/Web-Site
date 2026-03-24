import type { Locale } from "../lib/i18n";
import { companyInfo } from "./company";
import { applicationsPageContent as enApplicationsPageContent } from "./en/applications";
import { aboutPageContent as enAboutPageContent } from "./en/about";
import { contactPageContent as enContactPageContent } from "./en/contact";
import { homePageContent as enHomePageContent } from "./en/home";
import { kaolinPageContent as enKaolinPageContent } from "./en/kaolin";
import { mediaPageContent as enMediaPageContent } from "./en/media";
import { siteContent as enSiteContent } from "./en/site";
import { applicationsPageContent as ruApplicationsPageContent } from "./ru/applications";
import { aboutPageContent as ruAboutPageContent } from "./ru/about";
import { contactPageContent as ruContactPageContent } from "./ru/contact";
import { homePageContent as ruHomePageContent } from "./ru/home";
import { kaolinPageContent as ruKaolinPageContent } from "./ru/kaolin";
import { mediaPageContent as ruMediaPageContent } from "./ru/media";
import { siteContent as ruSiteContent } from "./ru/site";
import { applicationsPageContent as trApplicationsPageContent } from "./tr/applications";
import { aboutPageContent as trAboutPageContent } from "./tr/about";
import { contactPageContent as trContactPageContent } from "./tr/contact";
import { homePageContent as trHomePageContent } from "./tr/home";
import { kaolinPageContent as trKaolinPageContent } from "./tr/kaolin";
import { mediaPageContent as trMediaPageContent } from "./tr/media";
import { siteContent as trSiteContent } from "./tr/site";
import { applicationsPageContent as zhApplicationsPageContent } from "./zh/applications";
import { aboutPageContent as zhAboutPageContent } from "./zh/about";
import { contactPageContent as zhContactPageContent } from "./zh/contact";
import { homePageContent as zhHomePageContent } from "./zh/home";
import { kaolinPageContent as zhKaolinPageContent } from "./zh/kaolin";
import { mediaPageContent as zhMediaPageContent } from "./zh/media";
import { siteContent as zhSiteContent } from "./zh/site";

const siteContentMap = {
  en: enSiteContent,
  zh: zhSiteContent,
  tr: trSiteContent,
  ru: ruSiteContent,
};

const homeContentMap = {
  en: enHomePageContent,
  zh: zhHomePageContent,
  tr: trHomePageContent,
  ru: ruHomePageContent,
};

const aboutContentMap = {
  en: enAboutPageContent,
  zh: zhAboutPageContent,
  tr: trAboutPageContent,
  ru: ruAboutPageContent,
};

const kaolinContentMap = {
  en: enKaolinPageContent,
  zh: zhKaolinPageContent,
  tr: trKaolinPageContent,
  ru: ruKaolinPageContent,
};

const applicationsContentMap = {
  en: enApplicationsPageContent,
  zh: zhApplicationsPageContent,
  tr: trApplicationsPageContent,
  ru: ruApplicationsPageContent,
};

const mediaContentMap = {
  en: enMediaPageContent,
  zh: zhMediaPageContent,
  tr: trMediaPageContent,
  ru: ruMediaPageContent,
};

const contactContentMap = {
  en: enContactPageContent,
  zh: zhContactPageContent,
  tr: trContactPageContent,
  ru: ruContactPageContent,
};

export function getSiteContent(locale: Locale) {
  return siteContentMap[locale];
}

export function getHomePageContent(locale: Locale) {
  return homeContentMap[locale];
}

export function getAboutPageContent(locale: Locale) {
  return aboutContentMap[locale];
}

export function getKaolinPageContent(locale: Locale) {
  return kaolinContentMap[locale];
}

export function getApplicationsPageContent(locale: Locale) {
  return applicationsContentMap[locale];
}

export function getMediaPageContent(locale: Locale) {
  return mediaContentMap[locale];
}

export function getContactPageContent(locale: Locale) {
  return contactContentMap[locale];
}

export const defaultSiteContent = enSiteContent;
export { companyInfo };
