// Components
 import Button from '../common/Button';

// Styles
import './header.css';

type HeaderProp = {
  toggleModal: () => void;
};

export const Header = ({ toggleModal }: HeaderProp) => {
  return (
    <header className="header">
      <h2 className="heading">Management Car Auto</h2>
      <div className="btn-layout">
        <Button onClick={toggleModal} size="large" >Add New Car</Button>
      </div>
    </header>
  );
};
