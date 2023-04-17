import Header from'./componets/Header.js';
import Intro from './componets/Intro.js';
import Sidelines from './componets/Sidelines.js';
import Experience from './componets/Experience.js';
import About from './componets/About.js';
import Projects from './componets/Projects.js';
import Contact from './componets/Contact.js';
import Testimonies from './componets/Testimonies.js';
import Footer from './componets/Footer.js';
import React from 'react';
import './componets/Home.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }

  callAPI(){
    fetch("http://localhost:4000/TestApi")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }





  render(){
    return (
      <div>
        <header>
          <style>
            
          </style>
        </header>
        <Header />
        <Sidelines />
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Testimonies />
        <Footer />
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>

        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>

        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>

        <p className="shed1">{this.state.apiResponse}</p>
        <p className="shed1">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
