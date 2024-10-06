import React from 'react';
import { useEffect } from 'react';
import { COLORS } from './constants/constants';
import './App.css';
import { AboutMe } from './components/AboutMe';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { OtherThings } from './components/OtherThings';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
   useEffect(() => {
    document.title = 'Caden Conde | Portfolio';
   }, []);
  
  return (
    <div className="App" style={{ backgroundColor: COLORS.bgMain }}>
      <NavBar />
      <Header />
      <AboutMe />
      <Projects />
      <OtherThings />
      <Contact />

    </div>
  );
}

export default App;
