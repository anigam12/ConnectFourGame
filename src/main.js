import React, { Component } from 'react';
import './App.css';
import './index.css';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import Home from './Home.js';
import App from './App.js';
class Main extends Component {
 render() {
   return (
        <Router history={browserHistory}>
       <Route path={"/"} component={Home} >
          <IndexRoute component={Home} />
         </Route>
       <Route path={"Connect Four"} component={App}/>
     </Router>
   );
 }
}

export default Main;