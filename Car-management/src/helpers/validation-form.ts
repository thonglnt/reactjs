// Components
import { ValidateFieldMessages } from '../constants/messages';
import { Car } from '../interfaces/Car';

export interface ValidationResult {
  isValid: boolean;
  errors?: {
    carName: string;
    color: string;
    brandName: string;
    quantity: string;
    image: string;
  };
}

// Validate empty input value
const isEmpty = (value: string | number): boolean => {
  if (value) {
    return false;
  }
  return true;
};

// Validate form
export const validateCarForm = (car: Car) => {
  const result: ValidationResult = { isValid: true };

  result.errors = {
    carName: '',
    color: '',
    brandName: '',
    quantity: '',
    image: ''
  };

  if (isEmpty(car.carName)) {
    result.errors.carName = ValidateFieldMessages.CarNameRequired;
  }

  if (isEmpty(car.color)) {
    result.errors.color = ValidateFieldMessages.ColorRequired;
  }

  if (isEmpty(car.quantity)) {
    result.errors.quantity = ValidateFieldMessages.QuantityRequired;
  }

  if (isNaN(car.quantity) || car.quantity <= 0) {
    result.errors.quantity = ValidateFieldMessages.QuantityFormat;
  }

  if (isEmpty(car.brandName)) {
    result.errors.brandName = ValidateFieldMessages.BrandNameRequired;
  }

  if (isEmpty(car.image)) {
    result.errors.image = ValidateFieldMessages.ImageRequired;
  }

  const validate = result.errors;

  if (
    validate.carName ||
    validate.brandName ||
    validate.image ||
    validate.color ||
    validate.quantity
  ) {
    result.isValid = false;
  }

  return result;
};
