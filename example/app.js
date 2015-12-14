/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router';
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

ReactDOM.render((
    <Router>
        <Route path="/" component={Home}/>
        <Route path="button" component={Button}/>
        <Route path="cell" component={Cell}/>
        <Route path="toast" component={Toast}/>
        <Route path="dialog" component={Dialog}/>
        <Route path="progress" component={Progress}/>
        <Route path="msg" component={Msg}/>
        <Route path="article" component={Article}/>
        <Route path="actionsheet" component={ActionSheet}/>
        <Route path="icons" component={Icons}/>
    </Router>
), document.getElementById('container'));