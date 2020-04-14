import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Page = (props) => {

    let english = props.lang
    const { first, second, third } = props
    let state = props.state

    return ( 
        <>
            {/* <div><p>Jesteś na <span>{props.match.params.page}</span></p></div> */}
            <Switch>
                <Route path='/' exact render={(props) => <Home {...props} english={english}/>} />
                <Route path='/about' render={(props) => <About {...props} english={english} first={first} second={second} third={third} state={state}/>}/>
                <Route path='/projects' render={(props) => <Projects {...props} english={english} />}/>
                <Route path='/contact' render={(props) => <Contact {...props} english={english}/>}/>
            </Switch>
        </>
     );
}
 
export default Page;