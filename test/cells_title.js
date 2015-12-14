/**
 * Created by jf on 15/12/9.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {CellsTitle} = WeUI;

describe('<CellsTitle></CellsTitle>', ()=> {

    const text = `cells tips wording`;
    const wrapper = shallow(
        <CellsTitle>{text}</CellsTitle>
    );

    it(`should render <CellsTitle></CellsTitle> component `, ()=>{
        assert(wrapper.instance() instanceof CellsTitle);
    });

    it(`should have 'weui_cells_title' class name`, ()=>{
        assert(wrapper.hasClass(`weui_cells_title`));
    });

    it(`should have text ${text}`, ()=>{
        assert(wrapper.text() === text);
    });
});