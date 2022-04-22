import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/Home';
import React,{Switch} from 'react';


function App() {
   return (
      <>
         <Router>
            <Navbar> 
               <Switch>
                  <Router path='/' exact component={Home} />
               </Switch>
            </Navbar>
         </Router>
      </>
   );
}

export default App;
