import React from 'react';
import { Tab, TabBarItem, Article } from '../../../src/index';
import IconButton from '../home/images/icon_nav_button.png';
import IconMsg from '../home/images/icon_nav_msg.png';
import IconArticle from '../home/images/icon_nav_article.png';

export default class TabBarAutoDemo extends React.Component {
    render() {
        return (
            <Tab type="tabbar">
                <TabBarItem icon={<img src={IconButton}/>} label="Tab1">
                    <Article>
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
                </TabBarItem>
                <TabBarItem icon={<img src={IconMsg}/>} label="Tab2">
                    <Article>
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
                </TabBarItem>
                <TabBarItem icon={<img src={IconArticle}/>} label="Tab3">
                    <Article>
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
                </TabBarItem>
            </Tab>
        );
    }
};
