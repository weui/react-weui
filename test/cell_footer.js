import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {CellFooter} = WeUI;

describe('<CellFooter></CellFooter>', ()=> {

    ['cell footer wording', <img src="http://mmrb.github.io/avatar/bear.jpg" />].map((child)=>{
        describe(`<CellFooter>${child}</CellFooter>`, ()=>{
            const customClassName = 'customClassName1 customClassName2';
            const wrapper = shallow(
                <CellFooter className={customClassName}>{child}</CellFooter>
            );

            it(`should have 'weui-cell__ft' class name`, ()=>{
                assert(wrapper.hasClass(`weui-cell__ft`));
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