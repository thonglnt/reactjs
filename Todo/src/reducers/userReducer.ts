// Types
import { IDataUser } from 'types/dataType';
import { IUser } from 'types/user';

export const USER_ACTION = {
  GET_USER: 'GET_USER',
  CREATE_USER: 'CREATE_USER',
  DELETE_USER: 'DELETE_USER',
  CREATE_USER_FAILED: 'CREATE_USER_FAILED',
  DELETE_USER_FAILED: 'DELETE_USER_FAILED',
  DELETE_USER_REQUEST: 'DELETE_USER_REQUEST',
};

export type DataPayload = IUser[] | string | IUser | boolean;

export interface DataAction {
  action: string;
  payload: DataPayload;
}

const userReducer = (state: IDataUser, actions: DataAction): IDataUser => {
  const { action, payload } = actions;
  switch (action) {
    case USER_ACTION.GET_USER: {
      return { ...state, users: payload as IUser[] };
    }
    case USER_ACTION.CREATE_USER: {
      return { users: state.users.concat(payload as IUser) };
    }
    case USER_ACTION.CREATE_USER_FAILED: {
      const user = payload as IUser;
      const listUserUpdate = state.users.filter((item) => item.id !== user.id);
      return {
        ...state,
        users: listUserUpdate,
        isActionUserError: true,
        userErrorMessage: 'Add user error',
      };
    }
    case USER_ACTION.DELETE_USER: {
      const user = payload as IUser;
      const deleteUser = state.users.filter((item) => item.id !== user.id);
      return { ...state, users: deleteUser, isRemovingUser: false };
    }
    case USER_ACTION.DELETE_USER_FAILED: {
      const user = payload as IUser;

      return {
        ...state,
        users: [...state.users, user],
        isActionUserError: true,
        userErrorMessage: 'Delete user error',
        isRemovingUser: false,
      };
    }
    case USER_ACTION.DELETE_USER_REQUEST: {
      return { ...state, isRemovingUser: true };
    }
    default: {
      return { ...state };
    }
  }
};

export { userReducer };
