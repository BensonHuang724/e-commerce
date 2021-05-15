import React from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import Shoppage from './pages/shoppage/shoppage.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-up-page/sign-in-and-up-page.component.jsx';

import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <HashRouter>   
        <Header/>
        <switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={Shoppage}/>
          <Route exact path='/sign-in' component={SignInAndSignUpPage}/>
        </switch>
      </HashRouter>
    </div>
    
  );
}

export default App;
