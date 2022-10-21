import React from 'react';
import AboutMe from '../components/AboutMe';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import "./App.css";


function App() {
  return (
    <React.Fragment>
    <div className="App">

        <Navbar />
        <AboutMe />
        <Contact />
    </div>
    </React.Fragment>
  );
}

export default App;
