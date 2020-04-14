import React from 'react';
import BgTop from '../components/bgTop';
import BgBot from '../components/bgBot';
import '../styles/About.css';


const About = (props) => {
    const { first, second, third } = props
    let lang = props.english
    let state = props.state
    // console.log(state.first)
    return ( 
        <div className='about'>
            <BgTop title={lang ? 'About me' : 'O mnie'}/>
            <div className="panels">
                <div className={state.first ? 'panel active' : 'panel'} onClick={first}>
                    <h2>{lang ? 'About me' : 'O mnie'}</h2>
                    {lang ? <p>My name is Bartłomiej Nowak, I am from Krakow and I graduated from the AGH University of Science and Technology in the field of Materials Engineering. I became interested in front-end at the end of my studies and quickly became my passion. 
                    I really like the combination of technology and the visual side. I like to watch websites designed well from a technological and a visual side.</p> : <p>Nazywam się Bartłomiej Nowak, pochodzę z Krakowa gdzie też ukończyłem Akademię Górniczo-Hutniczą na kierunku Inżynieria Materiałowa. Front- endem zainteresowałem się pod koniec studiów i bardzo szybko stał się moją pasją. Bardzo podoba mi się w nim połączenie strony technologicznej oraz wizualnej. Lubię oglądać strony internetowe zaprojektowane dobrze ze strony technologicznej jak i właśnie wizualnej.</p>}
                </div>
                <div className={state.second ? 'panel active' : 'panel'} onClick={second}>
                    <h2>{lang ? 'My tech skills' : 'Moje umiejętności'}</h2>
                    {lang ? <p>Technologies in which I feel very good: HTML, CSS, JavaScript and React.JS.
                <br/><br/>
                I also know and use: Git, Sass, PHP, jQuery and SQL. 
            <br/><br/>
            I am currently developing my skills in: Vue.JS and Boostrapie.
            <br/><br/>
            In the past I have also had contact with languages ​​such as: Java, Python and Pascal.</p> : <p>Technologie w których czuję się bardzo dobrze: HTML, CSS, JavaScript oraz React.JS.
                <br/><br/>
            Korzystam również oraz znam: Git, Sass, PHP, jQuery i SQL. 
            <br/><br/>
            Obecnie rozwijam swoje umiejętności w: Vue.JS i Boostrapie.
            <br/><br/>
            W przeszłości miałem również styczność z takimi językami jak: Java, Python oraz Pascal.</p>}
                </div>
                <div className={state.third ? 'panel active' : 'panel'} onClick={third}>
                    <h2>{lang ? 'My hobbies' : 'Moje hobby'}</h2>
                    {lang ? <p>Besides Front-end I am interested in music, homerecording and motorsports. I love spending time cycling and drinking well-brewed coffee or top-fermented beer with my wife and friends.</p> : <p>Oprócz Front-endu interesuję się muzyką, home-recordingiem oraz wyścigami samochodowymi. Bardzo chętnie spędzam czas na wycieczkach rowerowych oraz przy dobrzej zapażonej kawie bądź piwie górnej fermentacji wraz z żoną oraz przyjaciółmi.</p>}
                </div>
            </div>
            {/* <button onClick={first}>sdsdsds</button>
            <button onClick={second}>sdsdsds</button>
            <button onClick={third}>sdsdsds</button>
            <button onClick={first}>a</button>
            <div>b</div>
            <div>c</div> */}
            {/* {lang ? 'pupa' : <p>Nazywam się Bartłomiej Nowak, pochodzę z Krakowa gdzie też ukończyłem Akademię Górniczo-Hutniczą na kierunku Inżynieria Materiałowa. Front- endem zainteresowałem się pod koniec studiów i bardzo szybko stał się moją pasją. Bardzo podoba mi się w nim połączenie strony technologicznej oraz wizualnej. Lubię oglądać strony internetowe zaprojektowane dobrze ze strony technologicznej jak i właśnie wizualnej.
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
            </p>} */}
            
            <BgBot/>
        </div>
     );
}
 
export default About;
