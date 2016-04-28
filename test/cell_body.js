/**
 * Created by jf on 15/12/9.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {CellBody} = WeUI;

describe('<CellBody></CellBody>', ()=> {

    ['cell body wording', <img src="http://mmrb.github.io/avatar/jf.jpg" />, <div><h2 className="title">文章标题</h2><p className="desc">文章描述</p></div>].map((child)=>{
        describe(`<CellBody>${child}</CellBody>`, ()=>{
            const customClassName = 'customClassName1 customClassName2';
            const wrapper = shallow(
                <CellBody className={customClassName}>{child}</CellBody>
            );

            it(`should render <CellBody></CellBody> component `, ()=>{
                assert(wrapper.instance() instanceof CellBody);
            });

            it(`should have 'weui_cell_bd' class name`, ()=>{
                assert(wrapper.hasClass(`weui_cell_bd`));
            });

            it(`should have custom class name ${customClassName}`, ()=> {
                assert(wrapper.hasClass(customClassName));
            });

            it(`should have child ${child}`, ()=>{
                assert(wrapper.contains(child));
            });
        });
    });

});