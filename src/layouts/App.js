import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Page from './Page';

class App extends Component {
  state={}
  render(){
    return(
      <Router>
        <div className="app">
          <header>
            {<Header/>}
          </header>
          <section>
            {<Page/>}
          </section>
          <footer>
            {<Footer/>}
          </footer>
        </div>
      </Router>
    )
  }
}

export default App;
