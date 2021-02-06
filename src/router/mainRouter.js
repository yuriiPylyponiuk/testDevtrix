import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainIfoPage from '../pages/mainPage/mainPage';
import ContactInfoPage from '../pages/contact/contactPage';
import PhotoPage from '../pages/photo/photoPage';
import LastPage from '../pages/lastpage/lastPage';


const RouterPages = () => {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path='/' component={MainIfoPage}/>
          <Route exact path='/page2/' component={ContactInfoPage}/>
          <Route exact path='/page3/' component={PhotoPage}/>
          <Route exact path='/page4/' component={LastPage}/>
        </Switch>
      </div>
    </Router>
  )
}

export default RouterPages