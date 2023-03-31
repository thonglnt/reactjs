// Lib
import { render, screen } from '@testing-library/react';

// Components
import Sidebar, { SidebarProps } from '@components/Sidebar';

describe('Test Sidebar component', () => {
  const initSidebar: SidebarProps = {
    children: <></>,
  };

  test('It should render correctly with initial Props', () => {
    const { container } = render(<Sidebar {...initSidebar} />);

    expect(container).toMatchSnapshot();
  });
});
