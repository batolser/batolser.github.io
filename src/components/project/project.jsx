import { NavLink } from "react-router-dom";

const Project = ({ title, img, id }) => {
    return (
        <NavLink to={`/project/${id}`}>
            <li className="project">
                <a href="./project-page.html">
                    <img src={img} alt={title} className="project__img" />
                    <h3 className="project__title">{title}</h3>
                </a>
            </li>
        </NavLink>

    );
}

export default Project;