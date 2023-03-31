// Lib
import { Route, Routes } from 'react-router-dom';

// Styles
import './styles/index.css';

// Constants
import { PATH } from '@constants/paths';

// Pages
import Home from '@pages/home';
import RegisterUser from '@pages/registerUser';

// Components
import { TodoProvider } from '@components/TodoProvider';
import { UserProvider } from '@components/UserProvider';

function App() {
  return (
    <TodoProvider>
      <UserProvider>
        <Routes>
          <Route path={PATH.REGISTER_USER} element={<RegisterUser />} />
          <Route path={PATH.HOME} element={<Home />} />
          <Route path={`${PATH.HOME}:selectingUserId`} element={<Home />} />
        </Routes>
      </UserProvider>
    </TodoProvider>
  );
}

export default App;
