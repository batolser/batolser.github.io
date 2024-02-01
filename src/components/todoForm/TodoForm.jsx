import { useState } from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from "../../services/actions/todos";

const TodoForm = () => {

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todoReducer)
    const [value, setValue] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodoo = (e) => {
        e.preventDefault();
        dispatch(addTodo(value));
        setValue('')
    }
    return (
        <form id='todo-form' onSubmit={addTodoo}>
            <input placeholder="new todo" value={value} onChange={(e) => { setValue(e.target.value) }} />
            <button type="submit">add</button>
        </form>
    );
}

export default TodoForm;