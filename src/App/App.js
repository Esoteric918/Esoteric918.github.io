import React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import Navbar from '../components/NavBar/Navbar';
import "./App.css";


function App() {
  return (
    <React.Fragment>
    <div className="App">

        <Navbar />
        <AboutMe />

    </div>
    </React.Fragment>
  );
}

export default App;
