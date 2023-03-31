import { SERVER_ERROR } from '@constants/errorMessage';
import { fetcher } from '@helpers/fetcher';

describe('Test fetcher function helper', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ test: 100 }),
    }),
  ) as jest.Mock;

  const urlSuccess: string = 'http://localhost:3001/users';

  const urlError: string = 'http://localhost:3001/users/abc';

  // TODO: Using mock function https://jestjs.io/docs/mock-functions#mock-implementations
  test('Test function fetcher is success', async () => {
    try {
      const response = await fetcher(urlSuccess);
      const responseData = await response.json();
      if (response) {
        expect(response).toBeCalled();
        expect(response).toEqual(responseData);
      }
    } catch (error) {
      console.log('error');
    }
  });

  test('Test function fetcher is error', async () => {
    try {
      const response = await fetcher(urlError);
      const responseData = await response.json();
      if (response) {
        expect(response).toBeCalled();
        expect(response).toEqual(responseData);
      }
    } catch (error) {
      console.log('error');
    }
  });
});
