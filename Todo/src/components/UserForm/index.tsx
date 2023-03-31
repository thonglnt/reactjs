// Lib
import { FormEvent } from 'react';
import { Link } from 'react-router-dom';

// Components
import Input from '@components/Input';
import { Spinner } from '@components/Spinner';

// Constants
import { PATH } from '@constants/paths';

export type UserFormProps = {
  onRegisterUser: (event: FormEvent<HTMLFormElement>) => void;
  formRef: React.LegacyRef<HTMLFormElement> | null;
  isSubmitting: boolean;
};

const UserForm = ({ onRegisterUser, formRef, isSubmitting = false }: UserFormProps) => {
  return (
    <form
      method='post'
      ref={formRef}
      data-testid='user-form'
      className='user-form'
      onSubmit={onRegisterUser}
    >
      <h2 className='title'>Create new user</h2>
      <div className='user-name'>
        <Input id='name' name='name' label='Name' placeholder='Enter name' minLength={6} />
      </div>
      <div className='avatar-url'>
        <Input
          id='avatar'
          type='url'
          name='avatar'
          label='Avatar'
          placeholder='Enter link avatar'
        />
      </div>
      <div className='button-wrapper'>
        <Link className='btn-secondary cancel' to={PATH.HOME}>
          Cancel
        </Link>
        <button type='submit' className='btn-success'>
          {isSubmitting ? <Spinner className='progress' /> : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
