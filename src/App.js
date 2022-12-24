import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Chats from './Chats';

function App() {
  return (
    <div>
      <Routes className='app'>
        <Route path='/tinder_clone/chat' element = {<Chats/>} />
        <Route path='/tinder_clone' element = {<Home/>} />
        {/* chat scr */}
        {/* indv chat scr */}
      </Routes>
    </div>
  );
}

export default App;
