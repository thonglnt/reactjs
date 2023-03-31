// Lib
import { InputHTMLAttributes, memo } from 'react';

export type InputProps = {
  id?: string;
  name: string;
  label?: string;
  type?: InputHTMLAttributes<HTMLElement>['type'];
  placeholder?: string;
  errorMessage?: string;
  defaultValue?: string;
  size?: 'input-lg';
  minLength?: number;
  isRequired?: boolean;
};

export const Input = ({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  errorMessage,
  defaultValue,
  size,
  minLength,
  isRequired = false,
}: InputProps) => {
  return (
    <>
      <label htmlFor={id} className='input-label'>
        {label}
      </label>
      <div className='input-wrapper'>
        <input
          id={id}
          defaultValue={defaultValue}
          type={type}
          className={`input ${size}`}
          name={name}
          placeholder={placeholder}
          minLength={minLength}
          required={isRequired}
        />
        {errorMessage && <small className='err-msg'>{errorMessage}</small>}
      </div>
    </>
  );
};

export default memo(Input);
