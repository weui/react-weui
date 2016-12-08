import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {PanelBody} = WeUI;

describe('<PanelBody></PanelBody>', ()=> {

    ['Panel body wording', <img src="http://mmrb.github.io/avatar/jf.jpg" />, <div><h2 className="title">文章标题</h2><p className="desc">文章描述</p></div>].map((child)=>{
        describe(`<PanelBody>${child}</PanelBody>`, ()=>{
            const wrapper = shallow(
                <PanelBody>{child}</PanelBody>
            );

            it(`should have 'weui-panel__bd' class name`, ()=>{
                assert(wrapper.hasClass(`weui-panel__bd`));
            });

            it(`should have child ${child}`, ()=>{
                assert(wrapper.contains(child));
            });
        });
    });

});