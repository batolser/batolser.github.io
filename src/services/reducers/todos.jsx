import { v4 as uuidv4 } from 'uuid';

import { GET_TODOS, ADD_TODO, DELETE_TODO, SAVE_TODO, TOGGLE_TODO } from '../actions/todos';

const initialState = []

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS: {
      return action.todos;
    }
    case ADD_TODO: {
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.title,
          completed: false
        }
      ];
    }
    case DELETE_TODO: {
      return state.filter(todo =>
        todo.id !== action.id
      )
    }
    case SAVE_TODO: {
      return state.map(todo =>
        todo.id === action.id ? {
          ...todo, title: action.title
        } :
          todo
      )
    }
    case TOGGLE_TODO: {
      return state.map(todo =>
        todo.id === action.id ? {
          ...todo, completed: !todo.completed
        } :
          todo
      )
    }

    default: {
      return state
    }

  }
}

