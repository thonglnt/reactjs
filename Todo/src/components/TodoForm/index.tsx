// Lib
import { FormEvent, useContext } from 'react';

// Assets
import { iconAdd } from '@assets';

// Component
import Input from '@components/Input';
import Spinner from '@components/Spinner';

// Contexts
import { TodoContext } from '@contexts/todoContext';

export type TodoFormProps = {
  onAddTodo: (event: FormEvent<HTMLFormElement>) => void;
};

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const { isAddingTodo } = useContext(TodoContext);

  return (
    <>
      <h1 className='title todo-title'>todos</h1>
      <form data-testid='form-todo' method='post' onSubmit={onAddTodo}>
        <div className='add-todo'>
          <Input
            size='input-lg'
            id='task'
            name='task'
            placeholder='Add new todo'
            defaultValue=''
            label=''
            isRequired={true}
          />
          <button className='add-button'>
            {isAddingTodo ? (
              <Spinner className='loading-add-todo' />
            ) : (
              <img className='add-icon' src={iconAdd} alt='add-todo' />
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
