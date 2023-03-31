// Lib
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import UserForm, { UserFormProps } from '@components/UserForm';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'UserForm',
  component: UserForm,
};

export const UserFormSample: Story<UserFormProps> = () => (
  <BrowserRouter>
    <UserForm onRegisterUser={action('onRegisterUser')} formRef={null} isSubmitting={false} />
  </BrowserRouter>
);
