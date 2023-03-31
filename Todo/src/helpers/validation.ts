// Types
import { IValidationResult } from 'types/validation';
import { IUser } from 'types/user';

// constants
import { AVATAR_REQUIRED, NAME_INVALID, NAME_REQUIRED } from '@constants/errorMessage';

/**
 * Validate empty input value
 * @param value input value
 * @returns true/false
 */
const isEmpty = (value: string | number): boolean => {
  return !!value;
};

export const formValidate = (user: IUser) => {
  const specialCharacter = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/;

  const result: IValidationResult = { isValid: true };

  result.errors = {
    name: '',
    avatar: '',
  };

  // name
  if (!isEmpty(user.name)) {
    result.errors.name = NAME_REQUIRED;
  }

  // avatar
  if (!isEmpty(user.avatar)) {
    result.errors.avatar = AVATAR_REQUIRED;
  }

  // validation special character
  if (!user.name.match(specialCharacter)) {
    result.errors.name = NAME_INVALID;
  }

  // Result
  const validate = result.errors;

  if (validate.name || validate.avatar) {
    result.isValid = false;
  }

  return result;
};
