import React from 'react';
import { Route, Routes } from "react-router-dom";

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home';
import Projects from './pages/projects';
import Project from './pages/project';
import Contacts from './pages/contacts';
import TodoPage from './pages/todo';

import ScrollToTop from './utils/scrollToTop';
import './styles/main.css'


function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />

      <Routes >

        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;

/* <header className="App-header">
        <div className='my-div'>
        <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Приветики! ')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      // .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
          <img src={mePic} className="animate__animated animate__pulse" alt="me" />
        </div>
       
       
      </header> */