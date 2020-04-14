import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Page from './Page';

class App extends Component {
  state={
    english : true,
    first: false,
    second: false,
    third: false
  }

  handleLanguage = () => {
    this.setState({
      english : !this.state.english
    })
  }
  handleFirst = () => {
    this.setState({first: !this.state.first})
    if(this.state.second==true || this.state.third==true){this.setState({second: false, third: false})}}
  handleSecond = () => {this.setState({second: !this.state.second})
    if(this.state.first==true || this.state.third==true){this.setState({first: false, third: false})}}
  handleThird = () => {this.setState({third: !this.state.third})
    if(this.state.second==true || this.state.first==true){this.setState({second: false, first: false})}}


  render(){
    return(
      <Router>
        <div className="app">
          <header>
            {<Header lang={this.state.english} langChange={this.handleLanguage}/>}
          </header>
          <section>
            {<Page lang={this.state.english}
            first={this.handleFirst}
            second={this.handleSecond}
            third={this.handleThird}
            state={this.state}/>}
          </section>
          <footer>
            {<Footer lang={this.state.english}/>}
          </footer>
        </div>
      </Router>
    )
  }
}

export default App;
