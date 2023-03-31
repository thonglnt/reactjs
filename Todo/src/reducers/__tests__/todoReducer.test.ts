// Reducers
import { TODO_ACTION, todoReducer } from '@reducers/todoReducer';

// Types
import { IDataTodo } from 'types/dataType';
import { ITodo } from 'types/todo';

describe('Test todo reducer', () => {
  const todos: ITodo[] = [
    {
      id: '1',
      task: 'todo',
      status: false,
      idUser: '1',
    },
    {
      id: '2',
      task: 'task',
      status: true,
      idUser: '2',
    },
  ];

  const mockDataTodo: ITodo = {
    id: '3',
    task: 'doing',
    status: false,
    idUser: '1',
  };

  const dataTodo: IDataTodo = {
    todos: todos,
  };

  test('Action get todo', () => {
    const updateAction = {
      action: TODO_ACTION.GET_TODO,
      payload: todos,
    };

    const updatedState = todoReducer(dataTodo, updateAction);
    expect(updatedState).toEqual({
      todos: [
        { id: '1', task: 'todo', status: false, idUser: '1' },
        { id: '2', task: 'task', status: true, idUser: '2' },
      ],
    });
  });

  test('Action add todo failed', () => {
    const updateAction = {
      action: TODO_ACTION.CREATE_TODO_FAILED,
      payload: mockDataTodo,
    };

    const updatedState = todoReducer(dataTodo, updateAction);
    expect(updatedState).toEqual({
      isActionTodoError: true,
      isAddingTodo: false,
      todoErrorMessage: 'Add todo error',
      todos: [
        { id: '1', task: 'todo', status: false, idUser: '1' },
        { id: '2', task: 'task', status: true, idUser: '2' },
      ],
    });
  });

  test('Action add todo', () => {
    const updateAction = {
      action: TODO_ACTION.CREATE_TODO,
      payload: mockDataTodo,
    };

    const updatedState = todoReducer(dataTodo, updateAction);
    expect(updatedState).toEqual({
      isAddingTodo: false,
      todos: [
        { id: '1', task: 'todo', status: false, idUser: '1' },
        { id: '2', task: 'task', status: true, idUser: '2' },
        { id: '3', task: 'doing', status: false, idUser: '1' },
      ],
    });
  });

  test('Action delete todo failed', () => {
    const updateAction = {
      action: TODO_ACTION.DELETE_TODO_FAILED,
      payload: todos[1],
    };

    const updatedState = todoReducer(dataTodo, updateAction);
    expect(updatedState).toEqual({
      isActionTodoError: true,
      todoErrorMessage: 'Delete todo error',
      todos: [
        { id: '1', task: 'todo', status: false, idUser: '1' },
        { id: '2', task: 'task', status: true, idUser: '2' },
        { id: '2', task: 'task', status: true, idUser: '2' },
      ],
    });
  });

  test('Action delete todo', () => {
    const updateAction = {
      action: TODO_ACTION.DELETE_TODO,
      payload: todos[0],
    };

    const updatedState = todoReducer(dataTodo, updateAction);
    expect(updatedState).toEqual({
      todos: [{ id: '2', task: 'task', status: true, idUser: '2' }],
    });
  });

  test('Action check done todo', () => {
    const updateAction = {
      action: TODO_ACTION.CHECK_DONE_TODO,
      payload: todos[0],
    };

    const updatedState = todoReducer(dataTodo, updateAction);
    expect(updatedState).toEqual({
      todos: [
        { id: '1', task: 'todo', status: false, idUser: '1' },
        { id: '2', task: 'task', status: true, idUser: '2' },
      ],
    });
  });

  test('Action check done todo failed', () => {
    const updateAction = {
      action: TODO_ACTION.CHECK_DONE_TODO_FAILED,
      payload: todos[0],
    };

    const updatedState = todoReducer(dataTodo, updateAction);
    expect(updatedState).toEqual({
      isActionTodoError: true,
      todoErrorMessage: 'Check done todo error',
      todos: [
        { id: '1', task: 'todo', status: true, idUser: '1' },
        { id: '2', task: 'task', status: true, idUser: '2' },
      ],
    });
  });

  test('Action create todo request', () => {
    const updateAction = {
      action: TODO_ACTION.CREATE_TODO_REQUEST,
    };

    const updatedState = todoReducer(dataTodo, updateAction);
    expect(updatedState).toEqual({
      isAddingTodo: true,
      todos: [
        { id: '1', task: 'todo', status: false, idUser: '1' },
        { id: '2', task: 'task', status: true, idUser: '2' },
      ],
    });
  });

  test('Action delete list todo success', () => {
    const updateAction = {
      action: TODO_ACTION.DELETE_LIST_TODO_SUCCESS,
      payload: [
        { id: '1', task: 'todo', status: false, idUser: '1' },
        { id: '2', task: 'task', status: true, idUser: '2' },
      ],
    };

    const updatedState = todoReducer(dataTodo, updateAction);
    expect(updatedState).toEqual({
      isActionTodoError: false,
      todoErrorMessage: '',
      todos: [],
    });
  });

  test('It should render default todo', () => {
    const updateAction = {
      action: 'demo',
      payload: todos,
    };

    const updatedState = todoReducer(dataTodo, updateAction);
    expect(updatedState).toEqual({
      todos: [
        { id: '1', task: 'todo', status: false, idUser: '1' },
        { id: '2', task: 'task', status: true, idUser: '2' },
      ],
    });
  });
});
