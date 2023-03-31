// Constants
import { SERVER_ERROR } from '@constants/errorMessage';

// Types
import { IUser } from 'types/user';

export const addUser = async (data: IUser, url: string) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return response;
  }

  throw new Error(SERVER_ERROR);
};

export const removeUser = async (url: string) => {
  const response = await fetch(url, {
    method: 'DELETE',
  });
  if (response.ok) {
    return response;
  }
  throw new Error(SERVER_ERROR);
};
