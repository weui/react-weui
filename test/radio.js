/**
 * Created by n7best on 16/2/25.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Radio} = WeUI;

describe('<Radio></Radio>', ()=> {
    [undefined, null, 'custom_class'].map(clazz => {
        describe(`<Radio className=${clazz}></Radio>`, ()=> {
            const wrapper = shallow(
                <Radio className={clazz}/>
            );

            it(`should render <Radio></Radio> component`, ()=> {
                assert(wrapper.instance() instanceof Radio);
            });

            it(`should render radio input component with weui_check class`, ()=> {
                assert(wrapper.find('input').hasClass('weui_check'));
            });

            it(`should render span with weui_icon_checked class`, ()=> {
                assert(wrapper.find('span').hasClass('weui_icon_checked'));
            });

            it(`should have custom class name ${clazz} when className is not null or empty`, ()=>{
                if (clazz) {
                    assert(wrapper.find('input').hasClass(clazz));
                }
            });
        })
    });
});