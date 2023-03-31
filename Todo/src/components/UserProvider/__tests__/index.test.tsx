// Lib
import { render } from '@testing-library/react';

// Components
import { UserProvider } from '@components/UserProvider';

describe('Test UserProvider component', () => {
  const initUserProvider = {
    children: <div>User Provider</div>,
  };

  test('It should render correctly with initial Props', () => {
    const { container } = render(<UserProvider {...initUserProvider} />);

    expect(container).toMatchSnapshot();
  });
});
