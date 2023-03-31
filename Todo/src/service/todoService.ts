// Constants
import { SERVER_ERROR } from '@constants/errorMessage';

// Types
import { ITodo } from 'types/todo';

export const addTodo = async (data: ITodo, url: string) => {
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

export const removeTodo = async (url: string) => {
  const response = await fetch(url, {
    method: 'DELETE',
  });

  if (response.ok) {
    return response;
  }

  throw new Error(SERVER_ERROR);
};

export const checkDoneTodo = async (url: string, data: ITodo) => {
  const response = await fetch(url, {
    method: 'PUT',
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
