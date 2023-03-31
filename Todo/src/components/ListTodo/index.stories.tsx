// Lib
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import ListTodo from '@components/ListTodo';
import { mockDataTodo } from '@mocks/mockDataTodo';

storiesOf('ListTodo', module).add('ListTodoSample', () => (
  <ListTodo
    onRemoveTodo={action('onRemoveTodo')}
    onToggleTodo={action('onToggleTodo')}
    todos={mockDataTodo}
  />
));
