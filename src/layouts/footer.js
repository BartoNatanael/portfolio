import React from 'react';
import '../styles/Footer.css';

const Footer = (props) => {
    let lang = props.lang
    return ( 
        <div>
            {lang ? <p>Website created by <strong><a href="#">Bartłomiej Nowak</a></strong>.</p> : 
            <p>Strona stworzona przez <strong><a href="#">Bartłomieja Nowaka</a></strong>.</p>}
            
            <p>
                <a href="https://github.com/BartoNatanael"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/bart%C5%82omiej-nowak-bb4897182/"><i className="fab fa-linkedin"></i></a>   
                <a href="https://www.facebook.com/bartek.krzysiek.nowak"><i className="fab fa-facebook"></i></a>   
                <a href="https://www.instagram.com/bartonatanel/"><i className="fab fa-instagram"></i></a>
                </p>
            
        </div>
     );
}
 
export default Footer;