import React from 'react';
import AboutMe from '../components/AboutMe';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import "./App.css";


function App() {
  return (
    <React.Fragment>
    <div className="App">

        <Navbar />
        <AboutMe />
        <Projects />
        <Contact />
    </div>
    </React.Fragment>
  );
}

export default App;
