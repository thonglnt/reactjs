// Components
import { ServerErrMessages } from '../constants/messages';

// Call api to get data server
export const getData = async (url: string) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error(ServerErrMessages.ServerGetError);
};

// Call api to post data server
export const postData = async <T>(requestData: T, url: string) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  });
  if (response.ok) {
    return response.json;
  }

  throw new Error(ServerErrMessages.ServerResponseError)
};

// Call api to update data server
export const updateData = async <T>(id: number, url: string, data: T): Promise<T> => {
  const response = await fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error(ServerErrMessages.ServerEditError);
};

// Call api to delete data server
export const deleteData = async <T>(id: number, url: string): Promise<T> => {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error(ServerErrMessages.ServerDeleteError);
};
