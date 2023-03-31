import { ChangeEvent, memo, useState } from 'react';

// Components
import Button from '../common/Button';
import Textbox from '../common/Textbox';
import Uploader from '../ImageUploader';
import { convertBase64 } from '../../helpers/encode';
import { validateCarForm, ValidationResult } from '../../helpers/validation-form';
import { Car } from 'src/interfaces/Car';
import { TEXT_BOX_INFO } from '../../mock/mockData';

// Styles
import './car-form.css';

type FormProp = {
  selectedCar?: Car | null;
  isDisableButton: boolean;
  toggleModal?: () => void;
  onCreate: (car: Car) => void;
  onEdit: (car: Car) => void;
};

type MessagesErr = {
  carName: string;
  color: string;
  brandName: string;
  quantity: string;
  image: string;
};

const initialCar: Car = {
  id: 0,
  carName: '',
  color: '',
  brandName: '',
  quantity: 0,
  image: ''
};

const initialErrorMsgs: MessagesErr = {
  carName: '',
  color: '',
  brandName: '',
  quantity: '',
  image: ''
};

const CarForm = ({ toggleModal, onCreate, onEdit, selectedCar, isDisableButton }: FormProp) => {
  const [carInformation, setCarInformation] = useState<Car>(selectedCar || initialCar);
  const [errorMessage, setErrorMessage] = useState(initialErrorMsgs);

  const uploadImage = async (e): Promise<void> => {
    const file = e.target.files[0];
    const srcImage = (await convertBase64(file)) as string;
    setCarInformation({ ...carInformation, image: srcImage });
  };

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCarInformation({
      ...carInformation,
      [name]: value
    });
  };

  const validationCar = (): void => {
    const validateForm: ValidationResult = validateCarForm(carInformation);

    if (!validateForm.isValid) {
      const messages = validateForm.errors;
      if (messages) {
        setErrorMessage(messages);
      }
    } else {
      setErrorMessage({} as MessagesErr);
    }
  };

  const handleCreateCar = (): void => {
    const newCar: Car = { ...carInformation, id: Date.now() };
    validationCar();
    onCreate(newCar);
  };

  const handleEditCar = (): void => {
    validationCar();
    onEdit(carInformation);
  };

  const renderTextBoxInfo = (): JSX.Element[] =>
    TEXT_BOX_INFO.map((item) => (
      <Textbox
        key={item.name}
        onChange={handleFieldChange}
        label={item.label}
        inputType={item.inputType}
        name={item.name}
        value={carInformation[item.name]}
        messageErr={errorMessage[item.name]}
      />
    ));

  const isHaveSelectedCar = selectedCar === undefined;

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="container">
          <h2 className="modal-heading">{!isHaveSelectedCar ? 'Edit Car' : 'Create New Car'}</h2>
          <form className="car-form">
            {renderTextBoxInfo()}
            <Uploader
              onChange={uploadImage}
              label="Image"
              name="image"
              baseImage={carInformation.image}
              messageErr={errorMessage.image}
            />
            <div className="group-btn">
              <Button
                onClick={selectedCar ? handleEditCar : handleCreateCar}
                size="small"
                color="btn-secondary"
                disabled={isDisableButton}
              >
                {!isHaveSelectedCar ? 'Save' : 'Create'}
              </Button>
              <Button onClick={toggleModal} size="small" color="btn-warning">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(CarForm);
