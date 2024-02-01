import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, saveTodo, toggleTodo } from "../../services/actions/todos";
import { GoCheck, GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";

const Todo = ({ todoTitle, id, completed }) => {
    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState('');


    const deleteTodoo = (id) => {
        dispatch(deleteTodo(id));
    }

    const editTodo = (id) => {
        setEdit(true)
        setTitle(todoTitle)
    }

    const saveTodoo = (id, title) => {
        dispatch(saveTodo(id, title));
        setEdit(false)
    }


    const toggleTodoo = (id) => {
        dispatch(toggleTodo(id))
    }


    return (<li>

        {
            edit ?
                <div className="todo">
                    {/* <input /> */}
                    <textarea name="" id="" rows="5" value={title} onChange={(e) => { setTitle(e.target.value) }}></textarea>
                    <button className='todo__btn' onClick={() => { saveTodoo(id, title) }}><GoCheck /></button>
                </div> :
                <div className="todo" onClick={() => toggleTodoo(id)} style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}>
                    {/* <button className='todo__btn' ><GoCheck /></button> */}
                    <p>{todoTitle}</p>
                    <div className='todo__btns'>
                        <button className='todo__btn' onClick={() => { deleteTodoo(id) }}><GoTrash /></button>
                        <button className='todo__btn' onClick={() => { editTodo() }}><GoPencil /></button>
                    </div>

                </div>

        }

    </li>);
}

export default Todo;