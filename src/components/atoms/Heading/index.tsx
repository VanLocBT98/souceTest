import React from 'react';

import mapModifiers from 'utils/functions';

export type Sizes =
  | '16x24'
  | '20x30'
  | '24x32'
  | '32x48'
  | '38x52'
  | '28x44'
  | '24x32';

type Variant = 'blueLinear';

export type TextStyle = (GeneralTextStyle | Sizes | Variant)[];

interface HeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  content?: string;
  modifiers?: TextStyle;
  children?: React.ReactNode
}

const Heading: React.FC<HeadingProps> = ({
  children, type = 'h2', content, modifiers,
}) => {
  const Element = type;

  if (content) {
    return (
      <Element
        className={mapModifiers('a-heading', modifiers)}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return (
    <Element className={mapModifiers('a-heading', modifiers)}>
      {children}
    </Element>
  );
};

Heading.defaultProps = {
  type: 'h2',
  modifiers: undefined,
  content: undefined,
};

export default Heading;
