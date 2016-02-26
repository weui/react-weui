/**
 * Created by n7best on 16/2/25.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Checkbox} = WeUI;

describe('<Checkbox></Checkbox>', ()=> {
    [undefined, null, 'custom_class'].map(clazz => {
        describe(`<Checkbox className=${clazz}></Checkbox>`, ()=> {
            const wrapper = shallow(
                <Checkbox className={clazz}/>
            );

            it(`should render <Checkbox></Checkbox> component`, ()=> {
                assert(wrapper.instance() instanceof Checkbox);
            });

            it(`should render Checkbox input component with weui_check class`, ()=> {
                assert(wrapper.find('input').hasClass('weui_check'));
            });

            it(`should render i with weui_icon_checked class`, ()=> {
                assert(wrapper.find('i').hasClass('weui_icon_checked'));
            });

            it(`should have custom class name ${clazz} when className is not null or empty`, ()=>{
                if (clazz) {
                    assert(wrapper.find('input').hasClass(clazz));
                }
            });
        });
    });
});