import React from 'react';
import green from '../images/sciana.jpg';
import '../styles/bg.css';

const bgTop = (props) => {
    return (
        <div className='bgTop'>
        <h1 className='h1bg'>{props.title}</h1>
        <img src={green} alt="" className="bg top"/>
        </div> 
     );
}
 
export default bgTop;