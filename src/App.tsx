import React from 'react';
import DarkmodeContextProvider from './components/context/darkmodeContextProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import WebGLMessageContextProvider from './components/context/webGLMessageContextProvider';
import Navbar from './components/navbar/navbar';
import './App.module.scss';

const App: React.FC = () => {
  return (
    <DarkmodeContextProvider>
      <WebGLMessageContextProvider>
        <Router>
          <Navbar />
          
        </Router>
      </WebGLMessageContextProvider>
    </DarkmodeContextProvider>
  )
}

export default App;
