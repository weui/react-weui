import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Root from './pages/root'
import Home from './pages/home'
import Docs from './pages/docs'
import Articles from './pages/articles'
import NoPreview from './pages/nopreview'
import 'babel-polyfill';
import './app.less';

const App = () =>
(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="docs/:id" component={Docs}>
        <IndexRoute component={NoPreview} />
        <Route path="articles/:aid" component={Articles}/>
      </Route>
    </Route>
  </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
