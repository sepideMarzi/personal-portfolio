import React from 'react';
import './App.css'; // or the path to your CSS file
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from "./components/Contact";
import { Footer } from './components/Footer';


function App() {
  return (
    <div>
      <NavBar />
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
