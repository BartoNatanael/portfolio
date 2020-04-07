import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Page = () => {
    return ( 
        <>
            {/* <div><p>Jesteś na <span>{props.match.params.page}</span></p></div> */}
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </>
     );
}
 
export default Page;