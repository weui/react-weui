import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const { Article } = WeUI;

describe('<ActionSheet></ActionSheet>', ()=> {
    [undefined, null, '', 'custom_class'].map((clazz)=> {
        describe('<Article className="${clazz}"></Article>', ()=> {
            const content = (
                <div>
                    <h1>大标题</h1>
                    <section>
                        <h2 className="title">章标题</h2>
                        <section>
                            <h3>1.1 节标题</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute</p>
                        </section>
                        <section>
                            <h3>1.2 节标题</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </section>
                    </section>
                </div>
            );
            const wrapper = shallow(
                <Article className={clazz}>
                    {content}
                </Article>
            );

            it('should render <Article></Article> component', () => {
                assert(wrapper.instance() instanceof Article);
            });

            it(`should have class name 'weui-article'`, ()=> {
                assert(wrapper.hasClass(`weui-article`));
            });

            it(`should have custom class name ${clazz}`, ()=> {
                if (clazz) {
                    assert(wrapper.hasClass(clazz));
                }
            });

            it(`should have children`, ()=> {
                assert(shallow(content).html() === wrapper.children().html());
            });
        });
    })
});