import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Panel, PanelHeader, PanelBody, PanelFooter} = WeUI;

describe('<Panel></Panel>', ()=> {
    [undefined, null, 'custom_class'].map(clazz => {
        [true, false].map((access) => {
            describe(`<Panel access="${access} className=${clazz}"></Panel>`, ()=> {
                const header = <PanelHeader><img src="http://mmrmb.github.io/avatar/bear.jpg" alt=""/></PanelHeader>;
                const body = <PanelBody><div><h2 className="title">标题</h2><p className="desc">描述</p></div></PanelBody>;
                const footer = <PanelFooter>footer</PanelFooter>;
                const wrapper = shallow(
                    <Panel access={access} className={clazz}>
                        {header}
                        {body}
                        {footer}
                    </Panel>
                );

                it(`should have 'weui-panel' class name`, ()=> {
                    assert(wrapper.hasClass(`weui-panel`));
                });

                it(`should have custom class name ${clazz}`, ()=> {
                    if(clazz){
                        assert(wrapper.hasClass(clazz));
                    }
                });

                //depreciate, show warning
               /* it(`should have 'weui_panel_access' when access attribute is true`, ()=> {

                });*/

                it(`should have header child`, ()=>{
                    assert(shallow(header).html() === wrapper.find(PanelHeader).html());
                });

                it(`should have body child`, ()=>{
                    assert(shallow(body).html() === wrapper.find(PanelBody).html());
                });

                it(`should have footer child`, ()=>{
                    assert(shallow(footer).html() === wrapper.find(PanelFooter).html());
                });
            });
        });
    });
});