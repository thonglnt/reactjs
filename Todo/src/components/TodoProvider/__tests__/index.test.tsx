// Lib
import { render } from '@testing-library/react';

// Components
import { TodoProvider } from '@components/TodoProvider';

describe('Test TodoProvider component', () => {
  const initTodoProvider = {
    children: <div>User Provider</div>,
  };

  test('It should render correctly with initial Props', () => {
    const { container } = render(<TodoProvider {...initTodoProvider} />);

    expect(container).toMatchSnapshot();
  });
});
