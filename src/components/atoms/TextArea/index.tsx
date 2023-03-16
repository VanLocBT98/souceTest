import React, { forwardRef } from 'react';

import mapModifiers from 'utils/functions';

export interface TextAreaProps {
  id: string;
  error?: string;
  maxLength?: number;
  handleChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleBlur?: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleFocus?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  rows?: number;
}

const TextAreaRef: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({
  error, disabled, placeholder, rows,
  id,
  handleBlur,
  handleChange,
  handleFocus,
  maxLength,
  value,
}, ref) => (
  <div className={mapModifiers(
    'a-textarea',
    error && 'error',
    disabled && 'disabled'
  )}
  >
    <div className="a-textarea_wrap">
      <textarea
        className="a-textarea_input"
        id={id}
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        rows={rows}
      />
    </div>
    {error && (
      <span className={mapModifiers('a-input_message', 'error')}>{error}</span>
    )}
  </div>
);

const TextArea = forwardRef(TextAreaRef);

export default TextArea;
