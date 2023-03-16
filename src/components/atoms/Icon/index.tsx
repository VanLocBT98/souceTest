import React from 'react';

import mapModifiers from 'utils/functions';

export const iconList = {
  search: 'search',
  closeGray: 'closeGray',
  blackSmallClose: 'blackSmallClose',
  greenSuccess: 'greenSuccess',
  redError: 'redError',
  prev: 'prev',
  next: 'next',
  playVideo: 'playVideo',
  closeGreen: 'closeGreen',
  dropDownGray: 'dropDownGray',
  hamburger: 'hamburger',
  searchGray: 'searchGray',
  arrowRightWhite: 'arrowRightWhite',
  phoneGreen: 'phoneGreen',
  emailGreen: 'emailGreen',
  facebookOrigin: 'facebookOrigin',
  zaloOrigin: 'zaloOrigin',
  cloudUpload: 'cloudUpload',
};

export type IconName = keyof typeof iconList;

export type IconSize = '10x10' | '14x14' | '16x16' | '18x18' | '20x20' | '24x24' | '40x40';

interface IconProps {
  iconName?: IconName;
  size?: IconSize;
}
const Icon: React.FC<IconProps> = ({ iconName, size }) => (
  <i className={mapModifiers('a-icon', iconName, size)} />
);

Icon.defaultProps = {
  size: '24x24',
};

export default Icon;
