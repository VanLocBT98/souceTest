import React from 'react';

import mapModifiers from 'utils/functions';

export type Sizes =
  | '12x16'
  | '16x24'
  | '20x30'
  | '38x52'
  | '24x32'
  | '14x22'
  | '12x16'
  | '14x21'
  | '18x28';

export type TextStyle = (GeneralTextStyle | Sizes)[];

interface TextProps {
  modifiers?: TextStyle;
  type?: 'p' | 'span' | 'div';
  content?: string;
  isInline?: boolean;
  children?: React.ReactNode
}

const Text: React.FC<TextProps> = ({
  modifiers,
  type = 'p',
  content,
  children,
  isInline,
}) => {
  const Element = type;

  return content ? (
    <Element
      className={mapModifiers('a-text', modifiers, isInline && 'inline')}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  ) : (
    <Element className={mapModifiers('a-text', modifiers, isInline && 'inline')}>
      {children}
    </Element>
  );
};

Text.defaultProps = {
  modifiers: undefined,
  type: 'p',
  content: undefined,
  isInline: undefined,
};

export default Text;
