// Lib
import { FormEvent, useContext, useRef, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

// Components
import UserForm from '@components/UserForm';

// Types
import { IUser } from 'types/user';

// Services
import { addUser } from '@service/userService';

// Constants
import { USER_ENDPOINT } from '@constants/endPoints';
import { formValidate } from '@helpers/validation';

// Contexts
import { UserContext } from '@contexts/userContext';

// Reducers
import { USER_ACTION } from '@reducers/userReducer';
import { PATH } from '@constants/paths';
import { generationId } from '@helpers/generationId';

const RegisterUser = () => {
  const formRef: React.LegacyRef<HTMLFormElement> = useRef(null);
  const { dispatch } = useContext(UserContext);
  const [isRegistingUser, setIsRegistingUser] = useState(false);

  const navigate: NavigateFunction = useNavigate();

  const validateUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = generationId();
    const name = (event.currentTarget.elements.namedItem('name') as HTMLInputElement).value;
    const avatar = (event.currentTarget.elements.namedItem('avatar') as HTMLInputElement).value;

    const user: IUser = { id, name, avatar };

    // Validate user
    const { isValid, errors } = formValidate(user);

    // Check validate if pass then create user, display notification success
    if (isValid) {
      handleCreateUser(user);
      return;
    }

    // Check validate if error then create user, display notification error
    errors?.name ? alert(errors?.name) : errors?.avatar && alert(errors?.avatar);
  };

  // Create user
  const handleCreateUser = async (user: IUser) => {
    try {
      dispatch({
        action: USER_ACTION.CREATE_USER,
        payload: { ...user },
      });

      formRef.current?.setAttribute('disabled', 'true');
      setIsRegistingUser(true);
      await addUser(user, USER_ENDPOINT);

      navigate(`${PATH.HOME}${user.id}`);
    } catch {
      alert(`Error when create user item: ${user.name}`);
      dispatch({
        action: USER_ACTION.CREATE_USER_FAILED,
        payload: { ...user },
      });
    } finally {
      formRef.current?.setAttribute('disabled', 'false');
      setIsRegistingUser(false);
    }
  };

  return (
    <div>
      <UserForm formRef={formRef} onRegisterUser={validateUser} isSubmitting={isRegistingUser} />
    </div>
  );
};

export default RegisterUser;
