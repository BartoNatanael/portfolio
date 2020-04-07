import React from 'react';
import BgTop from '../components/bgTop';
import BgBot from '../components/bgBot';
import '../styles/Projects.css';

const list = [
    {name: "Snake", discription: "Lorem impsum"},
    {name: "Snake1", discription: "Lorem impsum"},
    {name: "Snake2", discription: "Lorem impsum"},
    {name: "Snake3", discription: "Lorem impsum"},
    {name: "Snake4", discription: "Lorem impsum"},
    {name: "Snake5", discription: "Lorem impsum"},
]

const Projects = () => {

    const projects = list.map(project =>(
        <div key={project.name} className='project'>
            <h3>{project.name}</h3>
            <p>{project.discription}</p>
        </div>
    ))
    return ( 
        <div className="myProjects">
        <BgTop title={'Moje projekty'}/>
            <div className="projects">{projects}</div>
            <a href="#">Zobacz więcej na moim git-hubie</a>
            <BgBot/>
        </div>
     );
}
 
export default Projects;