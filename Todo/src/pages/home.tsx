// Lib
import { FormEvent, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import { useNavigate, useParams } from 'react-router-dom';

// Components
import BodyContent from '@components/BodyContent';
import ListTodo from '@components/ListTodo';
import TodoForm from '@components/TodoForm';
import UserSidebar from '@components/UserSidebar';

// Types
import { IUser } from 'types/user';
import { ITodo } from 'types/todo';

// Constants
import { TODO_ENDPOINT, USER_ENDPOINT } from '@constants/endPoints';
import { PATH } from '@constants/paths';

// Helpers
import { fetcher } from '@helpers/fetcher';
import { generationId } from '@helpers/generationId';

// Contexts
import { TodoContext } from '@contexts/todoContext';
import { UserContext } from '@contexts/userContext';

// Reducers
import { USER_ACTION } from '@reducers/userReducer';
import { TODO_ACTION } from '@reducers/todoReducer';

// Service
import { addTodo, checkDoneTodo, removeTodo } from '@service/todoService';
import { removeUser } from '@service/userService';

const Home = () => {
  // Using useParam get id in url
  const { selectingUserId } = useParams();

  // Loading indicator
  const [isProcessingTodoList, setProcessingTodoList] = useState(false);

  // Get data list user
  const { data: listUser, error: listUserError } = useSWR<IUser[]>(USER_ENDPOINT, fetcher);
  const { users, dispatch: dispatchUser } = useContext(UserContext);

  // Get data list todo
  const { data: listTodo, error: listTodoError } = useSWR<ITodo[]>(
    selectingUserId ? `${TODO_ENDPOINT}/?idUser=${selectingUserId}` : '',
    fetcher,
  );
  const { todos, dispatch: dispatchTodo } = useContext(TodoContext);

  // Handle error in fetching data
  if (listUserError) return <div>Failed to load list user</div>;
  if (listTodoError) return <div>Failed to load list todo</div>;

  // Navigate
  const navigate = useNavigate();

  useEffect(() => {
    if (listUser) {
      dispatchUser({
        action: USER_ACTION.GET_USER,
        payload: listUser,
      });
    }
  }, [listUser]);

  useEffect(() => {
    if (listTodo) {
      dispatchTodo({
        action: TODO_ACTION.GET_TODO,
        payload: listTodo,
      });
    }
  }, [listTodo]);

  // Add todo
  const handleAddTodo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatchTodo({
      action: TODO_ACTION.CREATE_TODO_REQUEST,
    });

    // Get value in input
    const id = generationId();
    const task = (event.currentTarget.elements.namedItem('task') as HTMLInputElement).value;

    const todo: ITodo = {
      id,
      task: task,
      status: false,
      idUser: selectingUserId ? selectingUserId : '',
    };

    // Reset value input
    (event.currentTarget.elements.namedItem('task') as HTMLInputElement).value = '';

    try {
      setProcessingTodoList(true);
      dispatchTodo({
        action: TODO_ACTION.CREATE_TODO,
        payload: { ...todo },
      });

      await addTodo(todo, TODO_ENDPOINT);
    } catch {
      alert(`Error when add new todo item: ${todo?.task}`);

      dispatchTodo({
        action: TODO_ACTION.CREATE_TODO_FAILED,
        payload: { ...todo },
      });
    } finally {
      setProcessingTodoList(false);
    }
  };

  // Remove todo
  const handleRemoveTodo = async (id: string) => {
    const todoItemDeleting = todos.find((todo) => todo.id === id);

    try {
      await removeTodo(`${TODO_ENDPOINT}/${id}`);

      setProcessingTodoList(true);
      dispatchTodo({
        action: TODO_ACTION.DELETE_TODO,
        payload: todoItemDeleting,
      });
    } catch {
      alert(`Error when remove todo item: ${todoItemDeleting?.task}`);

      dispatchTodo({
        action: TODO_ACTION.DELETE_TODO_FAILED,
        payload: todoItemDeleting,
      });
    } finally {
      setProcessingTodoList(false);
    }
  };

  // Check done todo and un check done todo
  const handleToggleTodo = async (id: string) => {
    const checkStatusTodoSelected = todos.find((item) => item.id === id);

    const todoUpdate = { ...checkStatusTodoSelected, status: !checkStatusTodoSelected?.status };
    try {
      dispatchTodo({
        action: TODO_ACTION.CHECK_DONE_TODO,
        payload: todoUpdate,
      });

      await checkDoneTodo(`${TODO_ENDPOINT}/${id}`, todoUpdate as ITodo);
    } catch {
      alert(`Error when check done todo item: ${todoUpdate?.task}`);

      dispatchTodo({
        action: TODO_ACTION.CHECK_DONE_TODO_FAILED,
        payload: todoUpdate,
      });
    }
  };

  // Remove todo by user
  const handleRemoveTodoByUser = async (user: IUser) => {
    const todosNeedToRemove = todos.filter((todo) => user.id === todo.idUser);

    // Delete todo by user
    try {
      const removeTodosProcessing = todosNeedToRemove.map((todo) => handleRemoveTodo(todo.id));

      await Promise.all(removeTodosProcessing);

      dispatchTodo({
        action: TODO_ACTION.DELETE_LIST_TODO_SUCCESS,
        payload: todosNeedToRemove,
      });
    } catch (error) {
      alert(`Error remove list todo of user: ${user.name}`);
    }
  };

  // Remove user
  const handleRemoveUser = async (userId: string) => {
    const userDeleting = users.find((user) => user.id === userId);

    if (!userDeleting) {
      alert('Can not find user!');
      return;
    }

    try {
      await removeUser(`${USER_ENDPOINT}/${userId}`);
      await handleRemoveTodoByUser(userDeleting);

      dispatchUser({
        action: USER_ACTION.DELETE_USER,
        payload: userDeleting,
      });

      navigate(PATH.HOME);
    } catch {
      alert(`Error when remove user item: ${userDeleting?.name}`);

      dispatchUser({
        action: USER_ACTION.DELETE_USER_FAILED,
        payload: userDeleting,
      });
    }
  };

  // Confirm remove user
  const confirmRemoveUser = async (id: string, name: string) => {
    if (window.confirm(`Are you sure remove user: ${name} ?`)) {
      dispatchUser({
        action: USER_ACTION.DELETE_USER_REQUEST,
      });

      await handleRemoveUser(id);
    }
  };

  const renderTodoBody = () => {
    return (
      <>
        <TodoForm onAddTodo={handleAddTodo} />
        {!listTodo ? (
          <p className='loading'>Loading...</p>
        ) : (
          <ListTodo onToggleTodo={handleToggleTodo} onRemoveTodo={handleRemoveTodo} todos={todos} />
        )}
        {isProcessingTodoList && <p className='loading'>Loading...</p>}
      </>
    );
  };

  return (
    <div>
      <UserSidebar onRemoveUser={confirmRemoveUser} users={users} />
      <BodyContent>
        {selectingUserId ? (
          renderTodoBody()
        ) : (
          <p>Content todo is empty, please help me create user or selected user.</p>
        )}
      </BodyContent>
    </div>
  );
};

export default Home;
