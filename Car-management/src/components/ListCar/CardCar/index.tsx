import { memo } from 'react';
import { Car } from 'src/interfaces/Car';

// Components
import Button from '../../common/Button';

// Styles
import './card-car.css';

export type CardProp = {
  id: number;
  carName: string;
  color: string;
  brandName: string;
  quantity: number;
  image: string;
  onEdit: (item: Car) => void;
  onDelete: (id: number, carName: string) => void;
};

const CardCar = ({
  carName,
  color,
  quantity,
  brandName,
  image,
  id,
  onEdit,
  onDelete
}: CardProp) => {
  const handleDelete = (): void => {
    onDelete(id, carName);
  };

  const handleEdit = (): void => {
    const car: Car = { id, carName, brandName, image, quantity, color };
    onEdit(car);
  };

  return (
    <div className="card">
      <div className="card-body">
        <img src={image} alt={`image ${image}`} className="card-image" />
        <h4 className="car-name">{carName}</h4>
        <span className="brand-name">Brand Name: {brandName}</span>
        <span className="quantity">Quantity: {quantity}</span>
        <span className="color">Color: {color}</span>
        <div className="button-group">
          <Button onClick={handleEdit} color="btn-secondary" size="small">
            Edit
          </Button>
          <Button color="btn-warning" onClick={handleDelete} size="small">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(CardCar);
