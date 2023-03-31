// Types
import { IUser } from 'types/user';

// Helpers
import { formValidate } from '@helpers/validation';

// Constants
import { AVATAR_REQUIRED, NAME_INVALID, NAME_REQUIRED } from '@constants/errorMessage';

describe('Test validation function', () => {
  const mockDataUserSuccess: IUser = {
    id: '1',
    avatar: 'https://www.google.com/image.png',
    name: 'thong',
  };

  const mockDataUserError: IUser = {
    id: '1',
    avatar: '',
    name: '',
  };

  const mockDataUserWithSpecialCharacter: IUser = {
    id: '1',
    avatar: 'avatar',
    name: '&^^&^(&$',
  };

  test('Test function form validation is success', () => {
    const { isValid } = formValidate(mockDataUserSuccess);

    expect(isValid).toEqual(true);
  });

  test('Test function form validation is error', () => {
    const { isValid, errors } = formValidate(mockDataUserError);

    expect(isValid).toEqual(false);

    expect(errors).toEqual({ avatar: AVATAR_REQUIRED, name: NAME_REQUIRED });
  });

  test('Test function form validation is special character', () => {
    const { isValid, errors } = formValidate(mockDataUserWithSpecialCharacter);

    expect(isValid).toEqual(false);

    expect(errors).toEqual({ avatar: '', name: NAME_INVALID });
  });
});
