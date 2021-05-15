import React from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import Shoppage from './pages/shoppage/shoppage.component.jsx';

function App() {
  return (
    <div>
      <HashRouter>   
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shoppage}/>
        
      </HashRouter>
    </div>
    
  );
}

export default App;
