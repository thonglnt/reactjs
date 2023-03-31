// Types
import { ITodo } from './todo';
import { IUser } from './user';

export interface IDataUser {
  users: IUser[];
  isActionUserError?: boolean;
  userErrorMessage?: string;
  isRemovingUser?: boolean;
}

export interface IDataTodo {
  todos: ITodo[];
  isActionTodoError?: boolean;
  todoErrorMessage?: string;
  isAddingTodo?: boolean;
}
