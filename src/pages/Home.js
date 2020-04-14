import React from 'react';
import '../styles/Home.css';
import sea from '../images/sciana.jpg';
import me from '../images/photo.JPG'

const Home = (props) => {
    let lang = props.english
    
    return ( 
        <div className="home">

            {lang ? <h1>Hi, <br/>
            my name is Bartek, <br/>
            I like Front-end.</h1> : 
            <h1>Cześć, <br/>
            jestem Bartek <br/>
            i lubię Front-end.</h1>}
            
            <img src={sea} alt="" className="sea"/>
            <img src={me} alt="" className="me"/>
        </div>
     );
}
 
export default Home;
