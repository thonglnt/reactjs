import { ChangeEventHandler } from 'react';

// Styles
import './search-car.css';

interface SearchProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const SearchTextBox = ({ onChange }: SearchProps) => {
  return (
    <div className="search">
      <input type="search" placeholder="Search..." className="search-input" onChange={onChange} />
    </div>
  );
};
