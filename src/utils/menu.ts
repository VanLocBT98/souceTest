import { MenuItemDataTypes } from 'components/organisms/Header';

export function getLangURL(lang?: string) {
  if (lang && lang !== 'vi') return `/${lang}`;
  return '';
}

export const returnRouteMenu = (menu: MenuItemDataTypes, lang?: string) => {
  if (menu.type === 'custom_link' && menu.link) {
    return `${getLangURL(lang)}${menu.link}`;
  }
  if (menu.reference?.slug) {
    return `${getLangURL(lang)}/${menu.reference?.slug !== '/' ? menu.reference.slug : ''}`;
  }
  return '#';
};
