// Lib
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import User, { UserProps } from '@components/User';

describe('Test User component', () => {
  const initUser: UserProps = {
    id: '1',
    avatar: 'avatar',
    name: 'thong',
    className: 'className',
    onRemoveUser: jest.fn(),
  };

  test('It should render correctly with initial Props', () => {
    const { container } = render(
      <BrowserRouter>
        <User {...initUser} />
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  test('It should match DOM Snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <User {...initUser} isRemovingUser={true} />
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  test('It should call remove user', () => {
    render(
      <BrowserRouter>
        <User {...initUser} />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByTestId('delete-user'));

    expect(initUser.onRemoveUser).toHaveBeenCalledTimes(1);
  });
});
