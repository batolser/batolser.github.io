import { useParams } from "react-router-dom";

import BtnGit from "../components/btnGit/BtnGit";
import { projects } from "../helpers/projectsList";

const ProjectPage = () => {

    const { id } = useParams();
    // const project = projects[0].id
    const project = projects.find((item) => item.id === id);

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt={project.tittle} className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>
                    {project.gitHubLink && (
                        <BtnGit link='https://gitHub.com ' />
                    )
                    }

                </div>
            </div>
        </main>
    );
}

export default ProjectPage;