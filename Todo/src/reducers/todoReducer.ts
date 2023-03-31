// Types
import { ITodo } from 'types/todo';
import { IDataTodo } from 'types/dataType';

export const TODO_ACTION = {
  GET_TODO: 'GET_TODO',
  CREATE_TODO: 'CREATE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  CHECK_DONE_TODO: 'CHECK_DONE_TODO',
  CREATE_TODO_FAILED: 'CREATE_TODO_FAILED',
  DELETE_TODO_FAILED: 'DELETE_TODO_FAILED',
  CHECK_DONE_TODO_FAILED: 'CHECK_DONE_TODO_FAILED',
  CREATE_TODO_REQUEST: 'ADD_TODO_REQUEST',
  DELETE_LIST_TODO_SUCCESS: 'DELETE_LIST_TODO_SUCCESS',
};

export type DataPayload = ITodo[] | string | ITodo | boolean;

export interface DataAction {
  action: string;
  payload?: DataPayload;
}

const todoReducer = (state: IDataTodo, actions: DataAction): IDataTodo => {
  const { action, payload } = actions;
  switch (action) {
    case TODO_ACTION.GET_TODO: {
      const listTodo = payload as ITodo[];
      return { ...state, todos: listTodo };
    }
    case TODO_ACTION.CREATE_TODO: {
      const listTodoUpdate = state.todos.concat(payload as ITodo);
      return { todos: listTodoUpdate, isAddingTodo: false };
    }
    case TODO_ACTION.CREATE_TODO_FAILED: {
      const todo = payload as ITodo;
      const listTodoUpdate = state.todos.filter((item) => item.id != todo.id);
      return {
        ...state,
        todos: listTodoUpdate,
        isActionTodoError: true,
        todoErrorMessage: 'Add todo error',
        isAddingTodo: false,
      };
    }
    case TODO_ACTION.DELETE_TODO: {
      const todo = payload as ITodo;
      const listTodoUpdate = state.todos.filter((item) => item.id != todo.id);
      return { ...state, todos: listTodoUpdate };
    }
    case TODO_ACTION.DELETE_TODO_FAILED: {
      const todo = payload as ITodo;
      return {
        ...state,
        todos: [...state.todos, todo],
        isActionTodoError: true,
        todoErrorMessage: 'Delete todo error',
      };
    }
    case TODO_ACTION.CHECK_DONE_TODO: {
      const todo = payload as ITodo;
      const listTodoUpdate: ITodo[] = state.todos.map((item) => {
        if (item.id === todo.id) {
          return todo;
        }

        return item;
      });

      return { ...state, todos: listTodoUpdate };
    }
    case TODO_ACTION.CHECK_DONE_TODO_FAILED: {
      const todo = payload as ITodo;
      const listTodoUpdate = state.todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, status: !todo.status };
        }

        return item;
      });

      return {
        ...state,
        todos: listTodoUpdate,
        isActionTodoError: true,
        todoErrorMessage: 'Check done todo error',
      };
    }
    case TODO_ACTION.CREATE_TODO_REQUEST: {
      return { ...state, isAddingTodo: true };
    }
    case TODO_ACTION.DELETE_LIST_TODO_SUCCESS: {
      const todoIdsNeedToRemove = (payload as ITodo[]).map((item) => item.id);

      return {
        ...state,
        todos: state.todos.filter((todo) => !todoIdsNeedToRemove.includes(todo.id)),
        isActionTodoError: false,
        todoErrorMessage: '',
      };
    }
    default: {
      return state;
    }
  }
};

export { todoReducer };
