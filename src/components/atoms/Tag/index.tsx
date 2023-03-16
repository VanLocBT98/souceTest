/* eslint-disable react/require-default-props */
import React from 'react';

interface TagProps {
  onClickTag?: (value: string) => void;
  text?: string;
}

const Tag: React.FC<TagProps> = ({ onClickTag, text }) => (
  <div className="a-tag" onClick={() => onClickTag && onClickTag(text || '')}>{text}</div>
);

Tag.defaultProps = {
};

export default Tag;
