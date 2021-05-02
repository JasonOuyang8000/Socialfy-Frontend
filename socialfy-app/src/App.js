import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './headers/Navbar';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import {ThemeContext} from './context/ThemeContext';
import { useEffect, useRef, useState } from 'react';
import { UserContext } from './context/UserContext';
import Form from './pages/Form';
import axios from 'axios';
import Loader from './components/Loader/Loader';

function App() {
  const [loaded, setLoaded] = useState(true);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

 
  const verifyUser = async() => {
    if (localStorage.getItem('userToken')) {
      try {
        setLoaded(false);
        let isCancelled = false;
       
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/user/verify`, {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('userToken')
          }
        });
        
       
        if (!isCancelled) {
          setUser(response.data.user);
          setLoaded(true);
        }
        
        return () => {
          isCancelled = true;
        };
        
      }
      catch(error) {
        localStorage.removeItem('userToken');
        setLoaded(true);
      }

    }
  }


  useEffect(() => {
    verifyUser();

  },[]);  




  return (
    <UserContext.Provider value={{user,setUser}}>
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className="App"  data-theme={theme}>

        {user !== null &&  <Navbar setUser={setUser} user={user}data-theme={theme} themeControl={{theme,setTheme}}/> 
        
        }
     
     
        <Switch>
          <Route exact path ="/">
            {
              loaded ? 
              user !== null ? 
                <Home />
                :
                <Form/>
              :
              <div style={{height: "70vh"}} className="d-flex justify-content-center align-items-center">
                <Loader/>
              </div>
            }
          
          </Route>

        </Switch>
    </div>
    </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
