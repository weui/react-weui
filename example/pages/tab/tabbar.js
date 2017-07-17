import React from 'react';

import {
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarIcon,
    TabBarLabel,
    Article
} from '../../../build/packages';

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
                        <h1>Page 1</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>1.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                    <Article style={{display: this.state.tab == 1 ? null : 'none'}}>
                        <h1>Page 2</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>2.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                    <Article style={{display: this.state.tab == 2 ? null : 'none'}}>
                        <h1>Page 3</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>3.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                    <Article style={{display: this.state.tab == 3 ? null : 'none'}}>
                        <h1>Page 4</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>4.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                </TabBody>
                <TabBar>
                    <TabBarItem
                        active={this.state.tab == 0}
                        onClick={e=>this.setState({tab:0})}
                        icon={<img src={IconButton}/>}
                        label="Tab1"
                    />
                    <TabBarItem active={this.state.tab == 1} onClick={e=>this.setState({tab:1})}>
                        <TabBarIcon>
                            <img src={IconMsg}/>
                        </TabBarIcon>
                        <TabBarLabel>Tab2</TabBarLabel>
                    </TabBarItem>
                    <TabBarItem
                        active={this.state.tab == 2}
                        onClick={e=>this.setState({tab:2})}
                        icon={<img src={IconArticle}/>}
                        label="Tab3"
                    />
                    <TabBarItem
                        active={this.state.tab == 3}
                        onClick={e=>this.setState({tab:3})}
                        icon={<img src={IconCell}/>}
                        label="Tab4"
                    />
                </TabBar>
            </Tab>
        );
    }
};
