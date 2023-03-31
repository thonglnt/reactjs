// Lib
import { render, screen, fireEvent } from '@testing-library/react';

// Components
import TodoItem, { TodoItemProps } from '@components/TodoItem';

describe('Test TodoItem component', () => {
  const initTodoItem: TodoItemProps = {
    id: '1',
    task: 'task 1',
    status: false,
    onRemoveTodo: jest.fn(),
    onToggleTodo: jest.fn(),
  };

  test('It should render correctly with initial Props', () => {
    const { container } = render(<TodoItem {...initTodoItem} />);

    expect(container).toMatchSnapshot();
  });

  test('It should call remove todo', () => {
    render(<TodoItem {...initTodoItem} />);
    fireEvent.click(screen.getByTestId('delete-todo'));

    expect(initTodoItem.onRemoveTodo).toHaveBeenCalledTimes(1);
  });

  test('It should call on check done todo', () => {
    render(<TodoItem {...initTodoItem} />);
    fireEvent.click(screen.getByTestId('check-done-todo'));

    expect(initTodoItem.onRemoveTodo).toHaveBeenCalledTimes(1);
  });
});
