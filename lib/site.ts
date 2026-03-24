import type { Locale } from "./i18n";

function normalizePath(path: string) {
  return path.replace(/^\/+|\/+$/g, "");
}

export function getLocaleHref(locale: Locale, path = "", hash?: string) {
  const normalizedPath = normalizePath(path);
  const basePath = normalizedPath ? `/${locale}/${normalizedPath}` : `/${locale}`;

  return hash ? `${basePath}#${hash}` : basePath;
}

export function replaceLocaleInPath(pathname: string, locale: Locale, hash = "") {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return hash ? `/${locale}${hash}` : `/${locale}`;
  }

  segments[0] = locale;

  return hash ? `/${segments.join("/")}${hash}` : `/${segments.join("/")}`;
}
