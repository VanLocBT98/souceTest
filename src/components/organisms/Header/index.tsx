import React, {
  ChangeEvent, KeyboardEvent, useRef, useState,
} from 'react';

import { LIST_LANGUAGE } from 'assets/dataDummy/header';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Input from 'components/atoms/Input';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import { OptionType } from 'components/molecules/PullDown';
import Container from 'components/organisms/Container';
import useClickOutside from 'hooks/useClickOutside';
import mapModifiers from 'utils/functions';
import { returnRouteMenu } from 'utils/menu';

export type Social = {
  link: LinkTypes;
  icon: string;
};

export type LinkTypes = {
  text: string;
  url: string;
  target: string;
};

export type MenuItemTypes = {
  id: number;
  menuId: number;
  title: string;
  link?: string;
  type: string;
  referenceId?: number;
  cssClass?: string;
  icon?: string;
  target: string;
  parentId: number;
  lft: number;
  rgt: number;
  depth: number;
  createdAt: string;
  updatedAt: string;
  reference?: {
    slug: string;
  };
};

export type MenuDataTypes = {
  code: string;
  items: MenuItemTypes[];
};

export type MenuItemDataTypes = {
  subMenu?: MenuItemDataTypes[];
  isActivated?: boolean;
  isActive?: boolean;
} & MenuItemTypes;

interface HeaderProps {
  logoSrc: string;
  headerData?: MenuItemDataTypes[];
  socialData?: Social[];
  handleLanguage?: (option: OptionType) => void;
}

const Header: React.FC<HeaderProps> = ({
  logoSrc,
  headerData = [],
  socialData = [],
  handleLanguage,
}) => {
  const [value, setValue] = useState('');
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [indexMenuOpen, setIndexMenuOpen] = useState<number>();
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [isOpenLanguageMobile, setIsOpenLanguageMobile] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [languageSelected, setLanguageSelected] = useState(LIST_LANGUAGE[0]);
  const languageMobileRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useClickOutside(languageRef, (): void => setIsOpenLanguage(false));
  useClickOutside(languageMobileRef, (): void => setIsOpenLanguageMobile(false));
  useClickOutside(searchRef, (): void => setIsOpenSearch(false));

  // Submit search
  const handleSubmit = (text?: string) => {
  // eslint-disable-next-line no-console
    console.log(text);
    setIsOpenSearch(false);
    setIsOpenMenu(false);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setValue('');
  };

  // Submit search by keyboard
  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e.currentTarget.value);
    }
  };

  /* eslint-disable react/no-unstable-nested-components */
  const LanguageHandle: React.FC = () => (
    <div className="o-header_language">
      <div
        className="o-header_language_languageSelected"
        onClick={() => {
          setIsOpenLanguage(!isOpenLanguage);
          setIsOpenLanguageMobile(!isOpenLanguageMobile);
          setIsOpenSearch(false);
        }}
      >
        <div className="o-header_language_languageSelected_content">
          <Text
            modifiers={['400', 'grayX11']}
          >
            {languageSelected.label}
          </Text>
        </div>
        <div
          className={mapModifiers('o-header_language_languageSelected_icon', (isOpenLanguage || isOpenLanguageMobile) && 'active')}
        >
          <Icon iconName="dropDownGray" size="10x10" />
        </div>
      </div>
      <div
        className={mapModifiers('o-header_language_languageList', (isOpenLanguage || isOpenLanguageMobile) && 'open')}
      >
        <ul>
          {
            LIST_LANGUAGE.map((item, index) => (
              <li
                key={`language-${index.toString()}`}
                onClick={() => {
                  if (handleLanguage) {
                    handleLanguage(item);
                  }
                  setLanguageSelected(item);
                  setIsOpenLanguage(false);
                  setIsOpenLanguageMobile(false);
                  setIsOpenMenu(false);
                }}
                className={mapModifiers(
'o-header_language_languageList_item',
                  item.label === languageSelected.label && 'active'
)}
              >
                <Text modifiers={['400', 'grayX11']}>
                  {item.label}
                </Text>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );

  return (
    <div className="o-header">
      <div className="o-header_wrapperMain">
        <div className="o-header_mobileBar">
          <div
            className="o-header_mobileBar_hamburger"
            onClick={() => {
              setIsOpenMenu(true);
              setIsOpenLanguageMobile(false);
            }}
          >
            <Icon iconName="hamburger" />
          </div>
          <Link customClassName="o-header_mobileBar_logo" href="/">
            <Image src={logoSrc} alt="logo-mobile" size="contain" ratio="logo" />
          </Link>
          <div ref={languageMobileRef} className="o-header_mobileBar_language">
            <LanguageHandle />
          </div>
        </div>
        <Container>
          <div
            className={mapModifiers('o-header_main', isOpenMenu && 'active')}
          >
            <div className="o-header_upperMenu">
              <Link customClassName="o-header_upperMenu_logo" href="/">
                <Image src={logoSrc} alt="logo-desktop" size="contain" ratio="logoNova" />
              </Link>
              <div className="o-header_upperMenu_general">
                <div
                  className="o-header_mobileBar_hamburgerClose"
                  onClick={() => setIsOpenMenu(false)}
                >
                  <Icon iconName="closeGray" />
                </div>
                <div className="o-header_upperMenu_generalWrapper">
                  <div className="o-header_upperMenu_social">
                    {
                      socialData.map((item, index) => (
                        <div
                          className="o-header_upperMenu_social_item"
                          key={`social-${index.toString()}`}
                        >
                          <Link href={item.link.url} target={item.link.target} useExternal>
                            <img alt={item.link.text} src={item.icon} />
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                  <div className="o-header_upperMenu_divider" />
                  <div ref={languageRef} className="o-header_upperMenu_language">
                    <LanguageHandle />
                  </div>
                </div>
                <div className="o-header_upperMenu_wrapperSearch">
                  <div
                    className="o-header_upperMenu_search"
                    onClick={() => {
                      setIsOpenSearch(!isOpenSearch);
                      setIsOpenLanguage(false);
                      setIsOpenLanguageMobile(false);
                      setTimeout(() => {
                        if (inputRef.current) {
                          inputRef.current.focus();
                        }
                      }, 150);
                    }}
                  >
                    <Icon iconName="searchGray" size="24x24" />
                  </div>
                  <div
                    className={mapModifiers('o-header_upperMenu_searchModal', isOpenSearch && 'show')}
                    ref={searchRef}
                  >
                    <div className="o-header_upperMenu_searchModal_wrapper">
                      <Input
                        autoComplete="off"
                        id="search"
                        ref={inputRef}
                        placeholder="Tìm kiếm..."
                        type="text"
                        handleKeyPress={onPressEnter}
                        value={value}
                        handleChange={
                          (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
                        }
                      />
                      <div
                        className="o-header_upperMenu_searchModal_wrapper_icon"
                        onClick={() => handleSubmit(inputRef.current?.value)}
                      >
                        <Icon iconName="searchGray" size="20x20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="o-header_divider" />
            <div className="o-header_mainMenu">
              <ul
                className="o-header_mainMenu_nav"
              >
                {
                  headerData.map((item, idx) => {
                    const isOpen = indexMenuOpen === item.id;
                    return (
                      <li
                        key={`mainMenu-${idx.toString()}`}
                        className={`o-header_mainMenu_navItem ${item.subMenu?.length ? 'o-header_hasChild' : ''} ${item.subMenu?.length && isOpen ? 'o-header_hasChild-show' : ''}`}
                        onClick={() => setIndexMenuOpen(isOpen ? undefined : item.id)}
                      >
                        <div className="o-header_mainMenu_wrapLink">
                          {
                            item.isActivated ? (
                              <Link
                                href={returnRouteMenu(item)}
                                customClassName="o-header_mainMenu_navLink"
                                handleClick={() => {
                                  setIsOpenMenu(false);
                                  setIsOpenLanguage(false);
                                  setIsOpenSearch(false);
                                }}
                              >
                                {item.title}
                              </Link>
                            ) : (
                              <span>
                                {item.title}
                              </span>
                            )
                          }
                        </div>
                        {item.subMenu?.length && (
                        <div className="o-header_dropdown">
                          <div className="o-header_dropdown_wrapper">
                            <ul className="o-header_dropdown_content">
                              {item.subMenu.map((itemSubmenu, index) => (
                                <li
                                  className={mapModifiers(
                                    'o-header_dropdown_item',
                                  )}
                                  key={`${itemSubmenu.title}${index.toString()}`}
                                >
                                  <Link
                                    href={`/${itemSubmenu.reference && itemSubmenu.reference.slug}` || '/'}
                                    handleClick={() => {
                                      setIsOpenMenu(false);
                                    }}
                                  >
                                    {itemSubmenu.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        )}
                      </li>
                    );
                  })
                }
              </ul>
            </div>
            <div className="o-header_mobileSocial">
              {
                socialData.map((item, index) => (
                  <div
                    className="o-header_mobileSocial_item"
                    key={`mobileSocial-${index.toString()}`}
                  >
                    <Link href={item.link.url} target={item.link.target} useExternal>
                      <img alt={item.link.text} src={item.icon} />
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

Header.defaultProps = {
  handleLanguage: undefined,
  headerData: undefined,
  socialData: undefined,
};

export default Header;
