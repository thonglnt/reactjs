// Lib
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

// Types
import { IUser } from 'types/user';

// Components
import User from '@components/User';

// Contexts
import { UserContext } from '@contexts/userContext';

export type ListUserProps = {
  listUser: IUser[];
  onRemoveUser: (id: string, name: string) => void;
};

const ListUser = ({ listUser, onRemoveUser }: ListUserProps) => {
  const { selectingUserId } = useParams();

  const { isRemovingUser } = useContext(UserContext);

  const handleRemoveUser = (id: string, name: string) => {
    onRemoveUser(id, name);
  };

  return (
    <ul className='user-list'>
      {listUser &&
        listUser.map(({ id, avatar, name }) => (
          <User
            className={id === selectingUserId ? 'user-item user-selected' : 'user-item'}
            onRemoveUser={handleRemoveUser}
            key={id}
            id={id}
            name={name}
            avatar={avatar}
            isRemovingUser={id === selectingUserId && isRemovingUser}
          />
        ))}
    </ul>
  );
};

export default ListUser;
