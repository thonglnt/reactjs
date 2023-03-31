// Types
import { IUser } from './user';

export interface IUserContext {
  users: IUser[];
  dispatch: Function;
  isActionUserError?: boolean;
  userErrorMessage?: string;
  isRemovingUser?: boolean;
}
