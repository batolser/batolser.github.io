
import { Filters } from "../../services/actions/todos";
import FilterLink from "../filterLink/FilterLink";

const Filter = () => {
    return (
        <div className="filter__wrapper">
            <span >Show: </span>
            <ul>
                <FilterLink filter={Filters.SHOW_ALL}>
                    All
                </FilterLink>
                <FilterLink filter={Filters.SHOW_ACTIVE}>
                    Active
                </FilterLink>
                <FilterLink filter={Filters.SHOW_COMPLETED}>
                    Completed
                </FilterLink>
            </ul>
        </div>
    );
}

export default Filter;