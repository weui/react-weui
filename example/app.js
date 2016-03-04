/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute} from 'react-router';
import WeUI from '../src/index';
import 'weui';

import Home from './pages/home/index';
import Button from './pages/button/index';
import Cell from './pages/cell/index';
import Toast from './pages/toast/index';
import Dialog from './pages/dialog/index';
import Progress from './pages/progress/index';
import Msg from './pages/msg/index';
import Article from './pages/article/index';
import ActionSheet from './pages/actionsheet/index';
import Icons from './pages/icons/index';
import Panel from './pages/panel/index';
import Tab from './pages/tab/index';
import NavBar from './pages/tab/navbar';
import TabBar from './pages/tab/tabbar';
import SearchBar from './pages/searchbar/index';

class App extends React.Component {
        render() {
                return (
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="page"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                        style={{height: '100%'}}
                    >
                            {React.cloneElement(this.props.children, {
                                    key: this.props.location.pathname
                            })}
                    </ReactCSSTransitionGroup>
                );
        }
}

ReactDOM.render((
    <Router>
            <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="button" component={Button}/>
                    <Route path="cell" component={Cell}/>
                    <Route path="toast" component={Toast}/>
                    <Route path="dialog" component={Dialog}/>
                    <Route path="progress" component={Progress}/>
                    <Route path="msg" component={Msg}/>
                    <Route path="article" component={Article}/>
                    <Route path="actionsheet" component={ActionSheet}/>
                    <Route path="icons" component={Icons}/>
                    <Route path="panel" component={Panel}/>
                    <Route path="tab" component={Tab}/>
                    <Route path="navbar" component={NavBar}/>
                    <Route path="tabbar" component={TabBar}/>
                    <Route path="searchbar" component={SearchBar}/>
            </Route>
    </Router>
), document.getElementById('container'));