// Lib
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import TodoItem, { TodoItemProps } from '@components/TodoItem';

export default {
  title: 'TodoItem',
  component: TodoItem,
};

export const Sample: Story<TodoItemProps> = () => (
  <TodoItem
    id='1'
    task='todo'
    status={false}
    onRemoveTodo={action('onRemoveTodo')}
    onToggleTodo={action('onToggleTodo')}
  />
);
