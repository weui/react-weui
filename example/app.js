import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute} from 'react-router';
import FastClick from 'fastclick';
import 'weui';

import Home from './pages/home/index';
import Button from './pages/button/index';
import List from './pages/list/index';
import Input from './pages/input/index';
import Toast from './pages/toast/index';
import Dialog from './pages/dialog/index';
import Progress from './pages/progress/index';
import Msg from './pages/msg/index';
import Article from './pages/article/index';
import ActionSheet from './pages/actionsheet/index';
import Icons from './pages/icons/index';
import Panel from './pages/panel/index';
import NavBar from './pages/tab/navbar';
import NavBar2 from './pages/tab/navbar_auto';
import TabBar from './pages/tab/tabbar';
import TabBar2 from './pages/tab/tabbar_auto';
import SearchBar from './pages/searchbar/index';
import Gallery from './pages/gallery';
import Uploader from './pages/uploader';
import Flex from './pages/flex/index';
import Footer from './pages/footer';
import Grid from './pages/grid';
import LoadMore from './pages/loadmore';
import Preview from './pages/preview';
import MsgSuccess from './pages/msg/success';
import MsgFail from './pages/msg/fail';
import TopTips from './pages/toptips';
import Popup from './pages/popup';
import Picker from './pages/picker';

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
            </Route>
    </Router>
), document.getElementById('container'));