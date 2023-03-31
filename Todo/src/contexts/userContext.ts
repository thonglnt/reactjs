// Lib
import { createContext } from 'react';

// Types
import { IUserContext } from 'types/userContextType';

export const UserContext = createContext<IUserContext>({} as IUserContext);
