export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const LOCAL_STORAGE = {
  LANGUAGE: 'NVS_Language',
  ACCESS_TOKEN: 'NVS_AccessToken',
};

export const CONSTANT_LANGUAGE_LIST = ['vi', 'en'];

export const DEFAULT_QUERY_OPTION = {
  retry: 0,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
};

export const MENU_CODE = {
  MENU_HEADER: 'header',
  MENU_FOOTER: 'footer',
  MENU_PDFLIST: 'pdf-list',
};

export type ConstantRoutesCodes = keyof typeof CONSTANT_ROUTES;
export type ConstantRoutesType = typeof CONSTANT_ROUTES;

export const CONSTANT_ROUTES = {
  NEWS_CATEGORIES: 'tin-tuc',
  INVESTMENT_SECTORS: 'linh-vuc-dau-tu',
  BUS_DETAILS: 'chi-tiet-bus',
  RECRUITMENT_DETAILS: 'chi-tiet-tuyen-dung',
  NEWS_DETAILS: 'chi-tiet-tin-tuc',
  COMMUNITY_SUPPORT_DETAILS: 'chi-tiet-ho-tro-cong-dong',
};

export const CONSTANT_ROUTES_EN: ConstantRoutesType = {
  NEWS_CATEGORIES: 'news',
  INVESTMENT_SECTORS: 'investment-sectors',
  BUS_DETAILS: 'bus-details',
  RECRUITMENT_DETAILS: 'recruitment-details',
  NEWS_DETAILS: 'news-details',
  COMMUNITY_SUPPORT_DETAILS: 'community-support-details',
};

export type LanguageKey = keyof LocalesType;

export type LocalesType = {
  vi: LocalesItem,
  en: LocalesItem,
};
