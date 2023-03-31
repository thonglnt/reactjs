// Lib
import { render, screen, fireEvent } from '@testing-library/react';

// Components
import ListTodo, { ListTodoProps } from '@components/ListTodo';
import { mockDataTodo } from '@mocks/mockDataTodo';

describe('Test ListTodo component', () => {
  const initListTodo: ListTodoProps = {
    todos: mockDataTodo,
    onRemoveTodo: jest.fn(),
    onToggleTodo: jest.fn(),
  };

  test('It should render correctly with initial Props', () => {
    const { container } = render(<ListTodo {...initListTodo} />);

    expect(container).toMatchSnapshot();
  });

  test('It should call remove todo', () => {
    render(<ListTodo {...initListTodo} />);
    fireEvent.click(screen.getAllByTestId('delete-todo')[0]);

    expect(initListTodo.onRemoveTodo).toHaveBeenCalledTimes(1);
  });
});
