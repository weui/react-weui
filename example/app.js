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
//import Button from './pages/button/index';
//import Cell from './pages/cell/index';
//import Toast from './pages/toast/index';
//import Dialog from './pages/dialog/index';
//import Progress from './pages/progress/index';
//import Msg from './pages/msg/index';
//import Article from './pages/article/index';
//import ActionSheet from './pages/actionsheet/index';
//import Icons from './pages/icons/index';
import Login from './pages/login/index';
import Register from './pages/register/index';
import User from './pages/user/index';
import TaskList from './pages/taskList/index';
import Task from './pages/task/index';
import Bonus from './pages/bonus/index';
import Notification from './pages/notification/index';


ReactDOM.render((
    <Router>
        <Route path="/" component={Home}/>
        <Route path="login" component={Login}/>
        <Route path="user" component={User}/>
        <Route path="taskList" component={TaskList}/>
        <Route path="task" component={Task}/>
        <Route path="bonus" component={Bonus}/>
        <Route path="notification" component={Notification}/>
        <Route path="register" component={Register}/>
    </Router>
), document.getElementById('container'));
