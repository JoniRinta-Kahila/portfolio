import React from 'react';
import DarkmodeContextProvider from './components/context/darkmodeContextProvider';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import WebGLMessageContextProvider from './components/context/webGLMessageContextProvider';
import Navbar from './components/navbar/navbar';
import './App.module.scss';
import Main from './components/sites/main';
import Projects from './components/sites/projects';
import Cv from './components/sites/cv';
import Notfound from './components/sites/notfound';
import MainFooter from './components/footer/mainFooter/mainFooter';
import ScrollPositionContextProvider from './components/context/scrollPositionContextProvider';

const App: React.FC = () => {
  return (
    <ScrollPositionContextProvider>
      <DarkmodeContextProvider>
        <WebGLMessageContextProvider>
          <Router>
            {/* Display Navbar only on spesific sites */}
            <Route
              render={({ location }) => ['/', '/cv'].includes(location.pathname)
                ? <Navbar />
                : null
              }
            />
            <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/cv' component={Cv} />
              <Route component={Notfound} />
            </Switch>
            {/* Display main footer only on spesific sites */}
            <Route
              render={({ location }) => ['/', '/cv'].includes(location.pathname)
                ? <MainFooter />
                : null
              }
            />
          </Router>
        </WebGLMessageContextProvider>
      </DarkmodeContextProvider>
    </ScrollPositionContextProvider>
  )
}

export default App;
