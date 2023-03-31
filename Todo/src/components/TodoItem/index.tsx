// Assets
import { iconDelete } from '@assets';

// Components
import Spinner from '@components/Spinner';

export type TodoItemProps = {
  id: string;
  task: string;
  status: boolean;
  onRemoveTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
  isRemoving?: boolean;
};

const TodoItem = ({
  id,
  task,
  status = false,
  onRemoveTodo,
  onToggleTodo,
  isRemoving = false,
}: TodoItemProps) => {
  const handleRemoveTodo = () => {
    onRemoveTodo(id);
  };

  const handleToggleTodo = () => {
    onToggleTodo(id);
  };

  return (
    <li className='todo-item'>
      <div className='round'>
        <input checked={status} onChange={handleToggleTodo} type='checkbox' />
        <label data-testid='check-done-todo' onClick={handleToggleTodo} htmlFor='checkbox' />
      </div>
      <p className='todo-task'>{status ? <s>{task}</s> : task}</p>
      {isRemoving ? (
        <Spinner className='icon' />
      ) : (
        <img
          src={iconDelete}
          data-testid='delete-todo'
          alt='delete'
          className='icon'
          onClick={handleRemoveTodo}
        />
      )}
    </li>
  );
};

export default TodoItem;
