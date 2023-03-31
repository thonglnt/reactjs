// Lib
import { useState } from 'react';

// Types
import { ITodo } from 'types/todo';

// Components
import TodoItem from '@components/TodoItem';

export type ListTodoProps = {
  todos: ITodo[];
  onRemoveTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
};

const ListTodo = ({ todos, onRemoveTodo, onToggleTodo }: ListTodoProps) => {
  const [removingTodoId, setRemovingTodoId] = useState<string[] | undefined>([]);

  const handleRemoveTodo = (id: string) => {
    setRemovingTodoId(removingTodoId?.concat(id));
    onRemoveTodo(id);
  };

  return (
    <ul className='list-todo'>
      {todos.map((item) => (
        <TodoItem
          onToggleTodo={onToggleTodo}
          onRemoveTodo={handleRemoveTodo}
          key={item.id}
          id={item.id}
          task={item.task}
          status={item.status}
          isRemoving={removingTodoId?.includes(item.id)}
        />
      ))}
    </ul>
  );
};

export default ListTodo;
