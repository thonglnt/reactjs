// Lib
import { ReactElement, useReducer } from 'react';

// Reducers
import { userReducer } from '@reducers/userReducer';

// Types
import { IDataUser } from 'types/dataType';

// Contexts
import { UserContext } from '@contexts/userContext';

const initialState: IDataUser = {
  users: [],
  isActionUserError: false,
  userErrorMessage: '',
  isRemovingUser: false,
};

type UserProviderProps = {
  children: ReactElement[] | ReactElement;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const { users, isActionUserError, userErrorMessage, isRemovingUser } = state;

  const value = {
    dispatch,
    users,
    isActionUserError,
    userErrorMessage,
    isRemovingUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
