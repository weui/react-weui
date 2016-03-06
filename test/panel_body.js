/**
 * Created by n7best
 */

"use strict";

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

            it(`should render <PanelBody></PanelBody> component `, ()=>{
                assert(wrapper.instance() instanceof PanelBody);
            });

            it(`should have 'weui_panel_bd' class name`, ()=>{
                assert(wrapper.hasClass(`weui_panel_bd`));
            });

            it(`should have child ${child}`, ()=>{
                assert(wrapper.contains(child));
            });
        });
    });

});