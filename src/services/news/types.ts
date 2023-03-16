/* eslint-disable camelcase */
export type PopularNewsDataTypes = {
  id: number;
  displayOrder: number;
  thumbnail: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
};

export type VideoNewsDataTypes = {
  id?: number;
  displayOrder: number;
  thumbnail: string;
  name: string;
  slug: string;
  link: string;
  isPopular?: boolean;
  type?: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
};

export type VideoNewsDataParamsTypes = {
  is_popular: number;
  keyword?: string;
  page?: number;
  limit?: number;
};

export type IncrementViewParamsTypes = {
  grecaptcha_token: string;
};

export type VideoDetailBySlugDataTypes = {
  id: number;
  thumbnail: string;
  name: string;
  slug: string;
  locale: string;
  displayOrder: number;
  type: string;
  link: string;
  view: number;
  isPopular: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  seoData: SEOData;
};
