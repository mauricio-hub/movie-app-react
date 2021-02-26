import React from 'react';
import Home from './pages/Home'
import Popular from './pages/Popular'
import Top from './pages/Top'
//import GlobalStyle from './components/GlobalStyles'
import Search from './components/Search'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css'
function App() {
  

  return (
   
  	 <Router>
      <div>
      
       <nav  class="navbar navbar-expand-lg navbar-light bg-light ">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
            Moive App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <Link 
                        ClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/"
                    >
                        HOME
                    </Link>

                    <Link 
                     
                        className="nav-item nav-link" 
                        exact
                        to="popular"
                    >
                        POPULAR
                    </Link>
                    
                    <Link 
                      
                        className="nav-item nav-link" 
                         exact to="/top"
                    >
                        TOP
                    </Link>
                </div>
               
            </div>


               <Search/>
            



        </nav>



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/popular">
            
            <Popular />
          </Route>
          <Route exact path="/top">
          
            <Top />
          </Route>
          <Route exact path="/">
         
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
    
  );
}

export default App;



