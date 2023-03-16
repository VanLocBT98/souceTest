import facebook from 'assets/images/header/img_header_facebook.png';
import youtube from 'assets/images/header/img_header_youtube.png';
import zalo from 'assets/images/header/img_header_zalo.png';
import { MenuItemDataTypes, Social } from 'components/organisms/Header';

export type LanguageType = 'VN' | 'EN' | 'JP';

export const LIST_LANGUAGE: Array<{ label: LanguageType, value: string }> = [
  {
    label: 'VN',
    value: 'vi',
  },
  {
    label: 'EN',
    value: 'en',
  },
];

export const menuList: MenuItemDataTypes[] = [
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: '/',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'Trang chủ',
    updatedAt: 'sss',
    isActivated: true,
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: 've-chung-toi',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'Giới thiệu',
    updatedAt: 'sss',
    isActivated: true,
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: 'chi-tiet-linh-vuc-dau-tu',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'Lĩnh Vực Đầu Tư',
    updatedAt: 'sss',
    isActivated: true,
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: 'quan-he-dau-tu',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'Quan Hệ Đầu Tư',
    updatedAt: 'sss',
    isActivated: true,
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: 'tin-tuc',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'Tin Tức',
    updatedAt: 'sss',
    isActivated: true,
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: 'tuyen-dung',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    updatedAt: 'sss',
    title: 'Tuyển Dụng',
    isActivated: true,
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: 'lien-he',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    updatedAt: 'sss',
    title: 'Liên Hệ',
    isActivated: true,
  },
];

export const socialList: Social[] = [
  {
    icon: zalo,
    link: {
      text: 'Zalo',
      url: '/zalo',
      target: '_blank',
    },
  },
  {
    icon: youtube,
    link: {
      text: 'Youtube',
      url: 'https://www.youtube.com/',
      target: '_blank',
    },
  },
  {
    icon: facebook,
    link: {
      text: 'Facebook',
      url: 'https://www.facebook.com/',
      target: '_blank',
    },
  },
];
