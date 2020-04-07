import React from 'react';
import green from '../images/sciana.jpg';
import '../styles/bg.css';

const bgBot = () => {
    return ( 
        <div className='bgBot'>
        <img src={green} alt="" className="bg"/>
        </div> 
     );
}
 
export default bgBot;