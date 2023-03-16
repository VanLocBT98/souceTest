/* eslint-disable no-undef */
import React from 'react';
import { Link as NavLink, LinkProps as RouterLinkProps } from 'react-router-dom';

export interface LinkProps extends Omit<RouterLinkProps, 'to'> {
  href?: string;
  customClassName?: string;
  useExternal?: boolean;
  target?: string;
  title?: string;
  activeClassName?: string;
  handleClick?: () => void;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({
  href,
  useExternal,
  title,
  customClassName = '',
  target = '_self',
  activeClassName = '',
  children,
  handleClick,
  ...props
}) => {
  if (useExternal) {
    return (
      <a
        className={`a-link ${customClassName} ${activeClassName}`}
        target={target}
        href={href}
        rel="noreferrer"
        title={title}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <NavLink
      title={title}
      to={href || '#'}
      className={`a-link ${customClassName} ${activeClassName}`}
      onClick={handleClick}
      target={target}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default Link;
