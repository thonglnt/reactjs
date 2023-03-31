// Lib
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import TodoForm, { TodoFormProps } from '@components/TodoForm';
import BodyContent from '@components/BodyContent';

export default {
  title: 'TodoForm',
  component: TodoForm,
};

export const TodoFormSample: Story<TodoFormProps> = () => (
  <BodyContent>
    <TodoForm onAddTodo={action('onAddTodoItem')} />
  </BodyContent>
);
