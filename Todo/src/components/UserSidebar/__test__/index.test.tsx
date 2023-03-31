// Lib
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import UserSidebar, { UserSidebarProps } from '@components/UserSidebar';

// Mocks
import { mockDataUser } from '@mocks/mockDataUser';

describe('Test UserSidebar component', () => {
  const initUserSidebar: UserSidebarProps = {
    users: mockDataUser,
    onRemoveUser: jest.fn(),
  };

  test('It should render correctly with initial Props', () => {
    const { container } = render(
      <BrowserRouter>
        <UserSidebar {...initUserSidebar} />
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  test('It should match data for UserSidebar component', () => {
    render(
      <BrowserRouter>
        <UserSidebar {...initUserSidebar} />
      </BrowserRouter>,
    );

    expect(screen.getAllByRole('img')[0].getAttribute('src')).toEqual(
      'https://haycafe.vn/wp-content/uploads/2022/03/Avatar-hai-1.jpg',
    );
  });
});
