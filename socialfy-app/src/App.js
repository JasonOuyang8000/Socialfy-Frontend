import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './headers/Navbar';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import {ThemeContext} from './context/ThemeContext';
import { useState } from 'react';
import { UserContext } from './context/UserContext';
import Form from './pages/Form';

function App() {

  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  return (
    <UserContext.Provider value={{user,setUser}}>
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className="App" data-theme={theme}>

        {user !== null &&  <Navbar data-theme={theme} themeControl={{theme,setTheme}}/> 
        }
     
        <Switch>
          <Route exact path ="/">
            {
              user !== null ? 
                <Home />
                :
                <Form/>
            }
          
          </Route>

        </Switch>
    </div>
    </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
