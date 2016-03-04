/**
 * Created by n7best.
 */

"use strict";

import React from 'react';
import Page from '../../component/page';

import {
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarIcon,
    TabBarLabel,
    Article
} from '../../../src/index';

import IconButton from '../home/images/icon_nav_button.png';
import IconMsg from '../home/images/icon_nav_msg.png';
import IconArticle from '../home/images/icon_nav_article.png';
import IconCell from '../home/images/icon_nav_cell.png';

export default class TabBarDemo extends React.Component {
    state={
        tab:0
    };

    render() {
        return (
            <Tab>
                <TabBody>
                    <Article style={{display: this.state.tab == 0 ? null : 'none'}}>
                        <h1>选项页1</h1>
                        <section>
                            <h2 className="title">章标题</h2>
                            <section>
                                <h3>1.1 节标题</h3>
                                <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                            </section>
                        </section>
                    </Article>
                    <Article style={{display: this.state.tab == 1 ? null : 'none'}}>
                        <h1>通讯录</h1>
                        <section>
                            <h2 className="title">章标题</h2>
                            <section>
                                <h3>2.1 节标题</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                    <Article style={{display: this.state.tab == 2 ? null : 'none'}}>
                        <h1>发现</h1>
                        <section>
                            <h2 className="title">章标题</h2>
                        </section>
                    </Article>
                    <Article style={{display: this.state.tab == 3 ? null : 'none'}}>
                        <h1>我</h1>
                        <section>
                            <h2 className="title">章标题</h2>
                        </section>
                    </Article>
                </TabBody>
                <TabBar>
                    <TabBarItem
                        active={this.state.tab == 0}
                        onClick={e=>this.setState({tab:0})}
                        icon={<img src={IconButton}/>}
                        label="微信"
                    />
                    <TabBarItem active={this.state.tab == 1} onClick={e=>this.setState({tab:1})}>
                        <TabBarIcon>
                            <img src={IconMsg}/>
                        </TabBarIcon>
                        <TabBarLabel>通讯录</TabBarLabel>
                    </TabBarItem>
                    <TabBarItem
                        active={this.state.tab == 2}
                        onClick={e=>this.setState({tab:2})}
                        icon={<img src={IconArticle}/>}
                        label="发现"
                    />
                    <TabBarItem
                        active={this.state.tab == 3}
                        onClick={e=>this.setState({tab:3})}
                        icon={<img src={IconCell}/>}
                        label="我"
                    />
                </TabBar>
            </Tab>
        );
    }
};
