/* eslint-disable react/require-default-props */
import React, { forwardRef } from 'react';

import Icon from '../Icon';

import mapModifiers from 'utils/functions';

/**
 * USEFUL PROPS IN SCOPE
 * Attribute: name, id, disabled, placeholder, value, maxLength, autoComplete,
 * Events handler: onChange, onBlur, onFocus
 */

type SizeModifiers = 'default' | 'formBg' | 'search' | 'contact';

interface InputProps {
  type?: 'text' | 'number' | 'email' | 'password';
  error?: string;
  label?: string;
  id: string;
  sizeModify?: SizeModifiers;
  modifiers?: 'default' | 'bg';
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  maxLength?: number;
  autoComplete?: 'on' | 'off';
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
  handleBlur?: React.ChangeEventHandler<HTMLInputElement>;
  handleFocus?: React.ChangeEventHandler<HTMLInputElement>;
  handleKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isSearch?: boolean;
}

const InputRef: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    type,
    disabled,
    placeholder,
    value,
    maxLength,
    autoComplete,
    error,
    label,
    id,
    sizeModify,
    handleChange,
    handleBlur,
    handleFocus,
    handleKeyPress,
    modifiers,
    isSearch,
  },
  ref,
) => (
  <div className={mapModifiers('a-input', type, disabled && 'disabled', isSearch && 'search', sizeModify || '', modifiers)}>
    {label && (
      <label className="a-input_label" htmlFor={id}>
        {label}
      </label>
    )}
    <div className="a-input_wrap">
      <input
        id={id}
        className="a-input_input"
        type={type}
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={autoComplete}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyPress={handleKeyPress}
      />
    </div>
    {isSearch && (
      <button className="a-input_searchBtn" type="submit">
        <Icon
          iconName="search"
          size="20x20"
        />
      </button>
    )}
    {error && (
      <span className={mapModifiers('a-input_message', 'error')}>{error}</span>
    )}
  </div>
);
const Input = forwardRef(InputRef);

Input.defaultProps = {
  type: 'text',
  modifiers: 'default',
};

export default Input;
