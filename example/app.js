import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute} from 'react-router';
import FastClick from 'fastclick';
import 'weui';
import "babel-polyfill";

import Pages from './index';
const { Home, Button, List, Input, Toast, Dialog, Progress, Msg, Article,
ActionSheet, Icons, Panel, NavBar, NavBar2, TabBar, TabBar2, SearchBar, Gallery,
Uploader, Flex, Footer, Grid, LoadMore, Preview, MsgSuccess, MsgFail, TopTips,
Popup, Picker, Slider, Badge, PTR, Infinite
} = Pages;


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

window.addEventListener('load', () => {
  FastClick.attach(document.body);
});

ReactDOM.render((
    <Router>
            <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="button" component={Button}/>
                    <Route path="list" component={List}/>
                    <Route path="input" component={Input}/>
                    <Route path="toast" component={Toast}/>
                    <Route path="dialog" component={Dialog}/>
                    <Route path="progress" component={Progress}/>
                    <Route path="msg" component={Msg} />
                    <Route path="msg/success" component={MsgSuccess}/>
                    <Route path="msg/fail" component={MsgFail}/>
                    <Route path="article" component={Article}/>
                    <Route path="actionsheet" component={ActionSheet}/>
                    <Route path="icons" component={Icons}/>
                    <Route path="panel" component={Panel}/>
                    <Route path="navbar" component={NavBar}/>
                    <Route path="navbar2" component={NavBar2}/>
                    <Route path="tabbar" component={TabBar}/>
                    <Route path="tabbar2" component={TabBar2}/>
                    <Route path="searchbar" component={SearchBar}/>
                    <Route path="gallery" component={Gallery}/>
                    <Route path="uploader" component={Uploader}/>
                    <Route path="flex" component={Flex}/>
                    <Route path="footer" component={Footer}/>
                    <Route path="grid" component={Grid}/>
                    <Route path="loadmore" component={LoadMore}/>
                    <Route path="preview" component={Preview}/>
                    <Route path="toptips" component={TopTips}/>
                    <Route path="popup" component={Popup}/>
                    <Route path="picker" component={Picker}/>
                    <Route path="slider" component={Slider}/>
                    <Route path="badge" component={Badge}/>
                    <Route path="ptr" component={PTR}/>
                    <Route path="infinite" component={Infinite}/>
            </Route>
    </Router>
), document.getElementById('container'));