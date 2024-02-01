import { Filters } from "../actions/todos";
import { SET_FILTER } from "../actions/todos";

const initialState = Filters.SHOW_ALL;

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.filter
    }
    default: {
      return state
    }
  }
}
