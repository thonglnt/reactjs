// Lib
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import UserForm, { UserFormProps } from '@components/UserForm';

describe('Test UserForm component', () => {
  const initUserForm: UserFormProps = {
    onRegisterUser: jest.fn(),
    formRef: null,
    isSubmitting: false
  };

  const customUserFormProps: UserFormProps = {
    onRegisterUser: jest.fn(),
    formRef: null,
    isSubmitting: true
  };

  test('It should render correctly with initial Props', () => {
    const { container } = render(
      <BrowserRouter>
        <UserForm {...initUserForm} />
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  test('It should render correctly with custom User Form Props', () => {
    const { container } = render(
      <BrowserRouter>
        <UserForm {...customUserFormProps} />
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  test('It should call on register user', () => {
    render(
      <BrowserRouter>
        <UserForm {...initUserForm} />
      </BrowserRouter>,
    );
    fireEvent.submit(screen.getByTestId('user-form'));

    expect(initUserForm.onRegisterUser).toHaveBeenCalledTimes(1);
  });
});
