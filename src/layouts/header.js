import React from 'react';
import { NavLink} from 'react-router-dom';
import '../styles/Header.css';

const list = [
    {name: 'Bartłomiej Nowak - portfolio', englishName:'Bartłomiej Nowak - portfolio', path: '/', exact: true},
    {name: 'O mnie', englishName:'About me', path: '/about'},
    {name: 'Moje projekty', englishName:'Projects', path: "/projects"},
    {name: "Kontakt", englishName:'Contact', path: '/contact'}
]

const Header = (props) => {

    let english = props.lang

    const menu = list.map(item => (
            <NavLink key={item.name} to={item.path} exact={item.exact ? item.exact: false}>{english ? item.englishName : item.name}
            </NavLink>        
    ))
    return ( 
        <nav>
                {menu}
                <button onClick={props.langChange}>{english ? "Polish" : "Angielski"}</button>
        </nav>
     );
}
 
export default Header;