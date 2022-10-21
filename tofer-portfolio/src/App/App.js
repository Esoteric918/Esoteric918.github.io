import React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import Navbar from '../components/NavBar/Navbar';


function App() {
  return (
    <React.Fragment>
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <AboutMe />
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
