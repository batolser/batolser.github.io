
import Todo from "../todo/Todo";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTodos } from "../../services/actions/todos";


const TodoList = ({ todos }) => {


    const localTodos = JSON.parse(localStorage.getItem('todos'));
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filterReducer);
    console.log(filter)


    useEffect(() => {
        if (localTodos) {
            dispatch(getTodos(localTodos));
        }
    }, []);

    return todos ? (
        <ul>{
            todos.map((todo) => {
                return (
                    <Todo todoTitle={todo.title} key={todo.id} id={todo.id} completed={todo.completed} />
                )
            })
        }
        </ul>
    ) : (
        <p>loading...</p>);
}

export default TodoList;