// Lib
import { createContext } from 'react';

// Types
import { ITodoContext } from 'types/todoContextType';

export const TodoContext = createContext<ITodoContext>({} as ITodoContext);
