import { ChangeEvent, memo } from 'react';

// Styles
import './textbox.css';

export type TextboxProp = {
  label: string;
  messageErr?: string;
  inputType: string;
  name: string;
  value: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Textbox = ({ label, messageErr, inputType, name, value, onChange }: TextboxProp) => {
  return (
    <div>
      <label htmlFor={name} className="label">{label}</label>
      <input name={name} id={name} value={value} onChange={onChange} className="input" type={inputType} />

      {messageErr && <span className="error-msg">{messageErr}</span>}
    </div>
  );
};

export default memo(Textbox);
