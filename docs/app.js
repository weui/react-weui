import React from 'react';
import ReactDOM from 'react-dom';
import {
  Switch,
  HashRouter as Router,
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

const basePath = process.env.NODE_ENV === 'production' ? '/react-weui/docs/' : '';

const App = () =>
(
  <Router basename={basePath}>
      <div>
      <Route exact path="/" render={() => (
          <Redirect to="/page/0/articles/0"/>
      )}/>
      <Route
          path="/page/:id/articles/:aid"
          render={ ({ match: { params } }) => (<Root params={params}><Docs params={params} /></Root>) } />
    </div>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
