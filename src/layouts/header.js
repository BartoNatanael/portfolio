import React from 'react';
import { NavLink} from 'react-router-dom';
import '../styles/Header.css';

const list = [
    {name: 'Bartłomiej Nowak - portfolio', path: '/', exact: true},
    {name: 'O mnie', path: '/about'},
    {name: 'Moje projekty', path: "/projects"},
    {name: "Kontakt", path: '/contact'}
]

const Header = () => {

    const menu = list.map(item => (
            <NavLink key={item.name} to={item.path} exact={item.exact ? item.exact: false}>{item.name}
            </NavLink>        
    ))
    return ( 
        <nav>
                {menu}
        </nav>
     );
}
 
export default Header;