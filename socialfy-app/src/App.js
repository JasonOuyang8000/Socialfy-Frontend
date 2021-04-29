import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './headers/Navbar';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import {ThemeContext} from './context/ThemeContext';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className="App" data-theme={theme}>
        <Navbar data-theme={theme} themeControl={{theme,setTheme}}/>
        <Switch>
          <Route exact path ="/">
              <Home />
          </Route>

        </Switch>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
