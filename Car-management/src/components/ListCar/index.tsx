import { memo } from 'react';

// Components
import isEqual from 'react-fast-compare';
import { Car } from '../../interfaces/Car';
import Card from './CardCar';

// Styles
import './list-car.css';

type ListCarProp = {
  cars: Car[];
  openModalEdit: (item: Car) => void;
  onDelete: (id: number, carName: string) => void;
};

const listCarPropsAreEqual = (prevListCar: ListCarProp, nextListCar: ListCarProp) => {
  return isEqual(prevListCar.cars, nextListCar.cars);
};

const ListCar = ({ cars, openModalEdit, onDelete }: ListCarProp) => {
  return (
    <div className="car-list">
      <div className="card-group">
        {cars.map((item) => (
          <Card key={item.id} {...item} onEdit={openModalEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default memo(ListCar, listCarPropsAreEqual);
