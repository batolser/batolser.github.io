import { Filters } from "../../services/actions/todos";
import { connect } from 'react-redux'
import { toggleTodo } from "../../services/actions/todos";
import TodoList from "../todoList/todoList";


export const FilteredList = (todos, filter) => {

  // const localTodos = JSON.parse(localStorage.getItem('todos'));
  // const dispatch = useDispatch();


  // useEffect(() => {
  //     if (localTodos) {
  //         dispatch(getTodos(localTodos));
  //     }
  // }, [localTodos, dispatch]);

  // console.log(localTodos)
  switch (filter) {
    case Filters.SHOW_ALL:
      return todos
    case Filters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case Filters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: FilteredList(state.todoReducer, state.filterReducer)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(TodoList)
