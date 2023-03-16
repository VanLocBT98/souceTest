import {
  ConstantRoutesCodes, CONSTANT_ROUTES, CONSTANT_ROUTES_EN, LanguageKey, LocalesType,
} from './constants';

import { StaticSlug } from 'services/navigations/types';

export const checkActiveLang = (
  activeLang: keyof LocalesResponse,
  listActive?: LocalesResponse,
): boolean => {
  if (listActive) {
    return !!listActive[activeLang].active;
  }
  return false;
};

export function readObjProps<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

export const findLanguageDefault = (
  locales?: LocalesResponse,
) => {
  if (locales) {
    const languageFind = (Object.keys(locales) as Array<keyof LocalesResponse>).find(
      (ele) => locales[ele].active && locales[ele].default,
    );
    return languageFind || 'vi';
  }
  return 'vi';
};

export const getMessageLanguage = (
  lang: keyof LocalesResponse,
  locales?: LocalesResponse,
) => {
  if (locales && locales[lang]) {
    return locales[lang].message || 'Error';
  }
  return 'Error';
};

export function getHomeLangURL(lang?: string) {
  if (lang && lang !== 'vi') return `/${lang}`;
  return '/';
}

export function getActiveLanguages(locales?: LocalesType) {
  if (locales) {
    return (Object.keys(locales) as Array<LanguageKey>).reduce(
      (prev: Array<LanguageKey>, curr: LanguageKey) => (locales[curr].active
        ? [...prev, curr] : [...prev]),
      [],
    );
  }
  return [];
}

export function getLangSlug(lang?: string) {
  if (lang && lang !== 'vi') return `${lang}/`;
  return '';
}

export function getHomeLangSlug(lang?: string) {
  if (lang && lang !== 'vi') return `${lang}/`;
  return '';
}

export function getLangURL(lang?: string) {
  if (lang && lang !== 'vi') return `${lang}/`;
  return '';
}

export function convertHomeRoute(langList: LanguageKey[]) {
  return langList.map((ele) => getHomeLangSlug(ele));
}

export function convertRoute(langList: LanguageKey[], slug?: string) {
  return langList.map((ele) => `${getLangSlug(ele)}${slug || ''}`);
}

export const getSlugByTemplateCode = (
  templateCode: string,
  staticSlug?: StaticSlug[],
): string => {
  if (staticSlug) {
    const res = staticSlug.find((ele) => ele.templateCode === templateCode);
    if (res) return res.slug;
    return '';
  }
  return '';
};

export function getStaticSlug(code: ConstantRoutesCodes, lang: string) {
  switch (lang) {
    case 'en':
      return `${CONSTANT_ROUTES_EN[code]}`;
    default:
      return `${CONSTANT_ROUTES[code]}`;
  }
}

export function convertStaticRoute(
  code: ConstantRoutesCodes,
  langList: LanguageKey[],
  noSlug?: boolean,
) {
  return langList.map(
    (ele) => `${getLangSlug(ele)}${getStaticSlug(code, ele)}${noSlug ? '' : '/:slug'}`,
  );
}

export function getPrefixURLCode(lang: string, code: ConstantRoutesCodes, slug?: string) {
  if (slug) return `/${getLangSlug(lang)}${getStaticSlug(code, lang)}/${slug}`;
  return '';
}

export function getPrefixURLCodeSwicthLang(lang: string, code: ConstantRoutesCodes, slug?: string) {
  if (slug) return `${getLangSlug(lang)}${getStaticSlug(code, lang)}/${slug}`;
  return '';
}

export const langLabel = (key: string) => {
  switch (key) {
    case 'vi':
      return 'VN';
    case 'en':
      return 'EN';
    default:
      return '';
  }
};
