import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Template from './core/Template.jsx';
import Home from './core/Home.jsx';
// Medication
import CreateMedication from './medications/CreateMedication.jsx';
import ViewMedication from './medications/ViewMedication.jsx';
import ListMedications from './medications/ListMedications.jsx';
import EditMedication from './medications/EditMedication.jsx';
//Log entries
import CreateArticle from './articles/CreateArticle.jsx';
import ViewArticle from './articles/ViewArticle.jsx';
import ListArticles from './articles/ListArticles.jsx';
import EditArticle from './articles/EditArticle.jsx';
//Consumer
import CreateConsumer from './consumers/CreateConsumer.jsx';
import ViewConsumer from './consumers/ViewConsumer.jsx';
import ListConsumers from './consumers/ListConsumers.jsx';
import EditConsumer from './consumers/EditConsumer.jsx';
//
import auth from './../services/Authentication';
import Signup from './users/Signup.jsx';
import Signin from './users/Signin.jsx';
import SignOut from './users/SignOut.jsx';
import EditUserProfile from './users/EditUserProfile.jsx';

function requireAuth(nextState, replace) {
  if (!auth.loggedIn())
    replace({ nextPathname: nextState.location.pathname }, '/signin');
}

export default(props) => {
  return (

  <Router history={browserHistory} >
      <Route path="/" component={Template}>
        <IndexRoute component={Home}/>
        <Route path="/articles/create" component={CreateArticle} onEnter={requireAuth}/>
        <Route path="/articles" component={ListArticles}/>
        <Route path="/articles/:id" component={ViewArticle}/>
        <Route path="/articles/edit/:id" component={EditArticle} onEnter={requireAuth}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signout" component={SignOut}/>
        <Route path="/users/edit/:id" component={EditUserProfile} onEnter={requireAuth}/>
      </Route>
    </Router>
  );
};
