type ErrorCodeResponse = {
  code: string;
  title: string;
};

type SEOData = {
  title?: string;
  description?: string;
  keywords?: string;
  imgSrc?: string;
};

type OGData = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
};

type LinkData = {
  self: string;
  first: string;
  prev: string;
  next: string;
  last: string;
};

type Meta = {
  totalPages: number;
  limit: number;
  total: number;
  page: number;
};

type BreadcrumbsData = {
  type: string;
  text: string;
  slug: string;
};

type APIPaginationResponse<T> = {
  data: T;
  links: LinkData;
  meta: Meta;
  message: string;
};

type APIResponse<T> = {
  data: T;
  message: string;
};

type LocalesItem = {
  icon?: string;
  message?: string;
  active?: boolean;
  default?: boolean;
};

type BlockComponents<T> = {
  code: string;
  blocks: T;
  active: boolean;
};

type PageData = {
  id: number;
  templateCode: string;
  code: string;
  active: boolean;
  isHome: boolean;
  groupCode?: any;
  name: string;
  status: number;
  parentId?: any;
  bannerId: number;
  createdAt: Date;
  updatedAt: Date;
  locale: string;
  title: string;
  slug: string;
  description?: any;
  translations: Translation[];
  image?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
};

type BasePageData<T> = {
  pageData: PageData;
  blocks: BlockComponents<T>[];
  banners: BannersData[];
  seoData: SEOData;
  breadcrumbs: BreadcrumbsData[];
};

type Translation = {
  locale: string;
  title: string;
  slug: string;
  description: string;
  type?: string;
};

type NotifyContact = {
  isOpen: boolean;
  type?: NotifyType;
  title?: string;
  message?: string;
};

type TranslationSwitchLang = {
  trans: Translation[],
  type?: string;
};

type LinkType = {
  text?: string;
  target?: string;
  href?: string
};
