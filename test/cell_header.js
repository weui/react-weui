/**
 * Created by jf on 15/12/9.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {CellHeader} = WeUI;

describe('<CellHeader></CellHeader>', ()=> {

    ['cell header wording', <img src="http://mmrb.github.io/avatar/jf.jpg" />, <p>cell header wording</p>].map((child)=>{
        describe(`<CellHeader>${child}</CellHeader>`, ()=>{
            const customClassName = 'customClassName1 customClassName2';
            const wrapper = shallow(
                <CellHeader className={customClassName}>{child}</CellHeader>
            );

            it(`should render <CellHeader></CellHeader> component `, ()=>{
                assert(wrapper.instance() instanceof CellHeader);
            });

            it(`should have 'weui_cell_hd' class name`, ()=>{
                assert(wrapper.hasClass(`weui_cell_hd`));
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