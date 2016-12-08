import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {CellsTips} = WeUI;

describe('<CellsTips></CellsTips>', ()=> {

    const text = `cells tips wording`;
    const customClassName = 'customClassName1 customClassName2';
    const wrapper = shallow(
        <CellsTips className={customClassName}>{text}</CellsTips>
    );

    it(`should have 'weui-cells_tips' class name`, ()=>{
        assert(wrapper.hasClass(`weui-cells__tips`));
    });

    it(`should have custom class name ${customClassName}`, ()=> {
        assert(wrapper.hasClass(customClassName));
    });

    it(`should have text ${text}`, ()=>{
        assert(wrapper.text() === text);
    });
});