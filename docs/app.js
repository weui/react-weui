import React from 'react';
import ReactDOM from 'react-dom';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

import Root from './pages/root';
import Home from './pages/home';
import Docs from './pages/docs';
import Articles from './pages/articles';
import NoPreview from './pages/nopreview';
import 'babel-polyfill';
import './app.less';

const App = () =>
(
  <Router>
      <div>
      <Route exact path="/" render={() => (
          <Redirect to="/docs/0/articles/0"/>
      )}/>
      <Route path="/docs/:id/articles/:aid" render={props => {
        const { match: { params }, ...others} = props;
        console.log(params);

        return (
          <Root params={params}>
              <Docs params={params} />
          </Root>
      );


        }} />
    </div>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// <Route path="docs/:id" component={Docs}>
//   <Route path="articles/:aid" component={Articles}/>
// </Route>
