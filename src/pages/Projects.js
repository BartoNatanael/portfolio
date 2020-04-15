import React from 'react';
import BgTop from '../components/bgTop';
import BgBot from '../components/bgBot';
import '../styles/Projects.css';
import snake from '../images/snake.png';
import spacer from '../images/spacer.png';
import toDoApp from '../images/toDoApp.png';
import weather from '../images/weather.png';

const list = [
    {name: "Snake", discription: "Popular game written in React.JS, feel free to play it!", opis: "Popularna gra, zwana u nas wężem napisana w React.JS. Zapraszam do gry!", img: snake},
    {name: "Spacer", discription: "App writeen in Vue.JS showing data and images from NASA, using its' API", opis: "Aplikacja napisana w Vue.JS pokazująca zdjęcia oraz informacje NASA", img: spacer},
    {name: "To Do App", discription: "To Do App created in Create React App with posibility of adding your own tasks", opis: "Aplikacja To Do napisana w środowisku Create React App z możliwością dodania własnych zadań", img:toDoApp},
    {name: "Weather", discription: "App created in React using API to show actual weather, daily and hourly forecast and showing photo of actual weather", opis: "Aplikacja napisana w React używająca API w celu pokazania aktualnej pogody, prognozy godzinowej i na parę dni oraz pokazująca zdjęcie aktualnej pogody", img:weather},
]

const Projects = (props) => {
    let lang = props.english
    const projects = list.map(project =>(
        <div key={project.name} className='project'>
            <h3>{project.name}</h3>
            <p>{lang ? project.discription : project.opis}</p>
            <img src={project.img} alt=""/>
        </div>
    ))
    return ( 
        <div className="myProjects">
        <BgTop title={lang ? "My projects" : 'Moje projekty'}/>
            <div className="projects">{projects}</div>
            <a href="https://github.com/BartoNatanael">{lang ? 'See more on my Git-hub' : 'Zobacz więcej na moim Git-hubie'}</a>
            <BgBot/>
        </div>
     );
}
 
export default Projects;