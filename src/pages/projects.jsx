import Project from '../components/project/project';
import { projects } from '../helpers/projectsList'
const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {
                        projects.map((elem) => {
                            return (
                                <Project title={elem.title} img={elem.img} key={elem.id} id={elem.id} />
                            )

                        })
                    }

                </ul>
            </div>
        </main>
    );
}

export default Projects;