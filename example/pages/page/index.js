import React from 'react';
import { Article, Page } from '../../../src/index';
import srcArticle from '../article/pic_article.png';

const PageDemo = (props) => (
    <Page transition={true} infiniteLoader={true} ptr={false}>
        <Article>
            <h1>Page Demo</h1>
            <section>
                <h2 className="title">H2 Title</h2>
                <section>
                    <h3>H3 Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute</p>
                    <p>
                        <img src={srcArticle} alt/>
                        <img src={srcArticle} alt/>
                    </p>
                </section>
                <section>
                    <h3>H3 Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
            </section>
        </Article>
    </Page>
);
export default PageDemo;
