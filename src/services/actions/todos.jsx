export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SAVE_TODO = 'SAVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER = 'SET_FILTER';

export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const setFilter = (filter) => {
  return function (dispatch) {
    dispatch({
      type: SET_FILTER,
      filter
    })
  }
}


export const getTodos = (todos) => {
  return function (dispatch) {
    dispatch({
      type: GET_TODOS,
      todos
    })
  }
}

export const addTodo = (title) => {
  return function (dispatch) {
    dispatch({
      type: ADD_TODO,
      title: title,
    })
  }
}

export const deleteTodo = (id) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_TODO,
      id: id
    })
  }
}

export const saveTodo = (id, title) => {
  return function (dispatch) {
    dispatch({
      type: SAVE_TODO,
      title: title,
      id: id
    })
  }
}

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})
