import React from 'react';
import BgTop from '../components/bgTop';
import BgBot from '../components/bgBot';
import '../styles/About.css';

const About = () => {
    return ( 
        <div className='about'>
            <BgTop title={'O mnie'}/>
            <p>Nazywam się Bartłomiej Nowak, pochodzę z Krakowa gdzie też ukończyłem Akademię Górniczo-Hutniczą na kierunku Inżynieria Materiałowa. Front- endem zainteresowałem się pod koniec studiów i bardzo szybko stał się moją pasją. Bardzo podoba mi się w nim połączenie strony technologicznej oraz wizualnej. Lubię oglądać strony internetowe zaprojektowane dobrze ze strony technologicznej jak i właśnie wizualnej.
                <br/><br/>
            Technologie w których czuję się bardzo dobrze: HTML, CSS, JavaScript oraz React.JS.
                <br/><br/>
            Korzystam również oraz znam: Git, Sass, PHP, jQuery i SQL. 
            <br/><br/>
            Obecnie rozwijam swoje umiejętności w: Vue.JS i Boostrapie.
            <br/><br/>
            W przeszłości miałem również styczność z takimi językami jak: Java, Python oraz Pascal.
            <br/><br/>
            Oprócz Front-endu interesuję się muzyką, home-recordingiem oraz wyścigami samochodowymi. Bardzo chętnie spędzam czas na wycieczkach rowerowych oraz przy dobrzej zapażonej kawie bądź piwie górnej fermentacji wraz z żoną oraz przyjaciółmi.
            </p>
            <BgBot/>
        </div>
     );
}
 
export default About;
