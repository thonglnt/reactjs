// Lib
import { render, screen, fireEvent } from '@testing-library/react';

// Components
import TodoForm, { TodoFormProps } from '@components/TodoForm';

describe('Test TodoForm component', () => {
  const initTodoForm: TodoFormProps = {
    onAddTodo: jest.fn(),
  };

  test('It should render correctly with initial Props', () => {
    const { container } = render(<TodoForm {...initTodoForm} />);

    expect(container).toMatchSnapshot();
  });

  test('It should call remove todo', () => {
    render(<TodoForm {...initTodoForm} />);
    fireEvent.submit(screen.getByTestId('form-todo'));

    expect(initTodoForm.onAddTodo).toHaveBeenCalledTimes(1);
  });
});
