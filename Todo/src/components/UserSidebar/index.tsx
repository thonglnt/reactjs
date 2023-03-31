// Lib
import { Link } from 'react-router-dom';

// Components
import ListUser from '@components/ListUser';
import Sidebar from '@components/Sidebar';

// Types
import { IUser } from 'types/user';

// Constants
import { PATH } from '@constants/paths';

export type UserSidebarProps = {
  users: IUser[];
  onRemoveUser: (id: string, name: string) => void;
};

const UserSidebar = ({ users, onRemoveUser }: UserSidebarProps) => {
  return (
    <Sidebar>
      <h2 className='title sidebar-title'>List Users</h2>
      <ListUser onRemoveUser={onRemoveUser} listUser={users} />
      <Link to={PATH.HOME + PATH.REGISTER_USER}>
        <button className='button'>New user</button>
      </Link>
    </Sidebar>
  );
};

export default UserSidebar;
