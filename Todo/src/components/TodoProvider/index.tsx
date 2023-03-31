// Lib
import { ReactElement, useReducer } from 'react';

// Contexts
import { TodoContext } from '@contexts/todoContext';

// Reducers
import { todoReducer } from '@reducers/todoReducer';

// Types
import { IDataTodo } from 'types/dataType';

const initialState: IDataTodo = {
  todos: [],
  isActionTodoError: false,
  todoErrorMessage: '',
  isAddingTodo: false,
};

type TodoProviderProps = {
  children: ReactElement[] | ReactElement;
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const { todos, isActionTodoError, todoErrorMessage, isAddingTodo } = state;

  const value = {
    todos,
    dispatch,
    isActionTodoError,
    todoErrorMessage,
    isAddingTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
