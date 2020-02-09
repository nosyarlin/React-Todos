import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

export function handleAddTodo(name, cb) {
  return (dispatch) => {
    API.saveTodo(name)
      .then((todo) => {
        cb();
        dispatch(addTodo(todo));
      })
      .catch(() => {
        alert('There was an error. Please try again.');
      });
  }
}

export function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id));
    return API.deleteTodo(todo.id)
      .catch(() => {
        dispatch(addTodo(todo));
        alert('An error occurred. Please try again.')
      });
  }
}

export function handleToggleTodo(id) {
  return (dispatch) => {
    dispatch(toggleTodo(id));
    API.saveTodoToggle(id)
      .catch(() => {
        dispatch(toggleTodo(id));
        alert('An error occurred. Please try again.')
      });
  }
}