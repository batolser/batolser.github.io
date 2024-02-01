import Filter from "../components/filter/Filter";
import TodoForm from "../components/todoForm/TodoForm";
import FilteredList from "../components/filteredList/FilteredList";

const TodoPage = () => {

    return (
        <main className="section section__todo">
            <div className="container container__todo">
                <h2 className="title-1">Todo App</h2>
                <TodoForm />
                <Filter />
                <FilteredList />
            </div>
        </main>
    );
}

export default TodoPage;