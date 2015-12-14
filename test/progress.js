/**
 * Created by jf on 15/12/9.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Progress} = WeUI;

describe('<Progress></Progress>', ()=> {
    [undefined, null, () => {
    }].map((onClick) => {
        describe(`<Progress></Progress>`, () => {
            let value = 50.38;
            const wrapper = shallow(
                <Progress value={value} onClick={onClick}/>
            );

            it(`should render <Progress></Progress> component`, ()=> {
                assert(wrapper.instance() instanceof Progress);
                assert(wrapper.hasClass('weui_progress'));
            });

            it(`should have .weui_progress_inner_bar element with width ${value}%`, ()=> {
                const $bar = wrapper.find('.weui_progress_inner_bar');
                assert($bar.prop('style').width === `${value}%`);
            });

            it(`should have .weui_progress_opr element with 'onClick' attribute`, ()=> {
                const $opr = wrapper.find('.weui_progress_opr');
                if (onClick) {
                    assert($opr.prop('onClick') === onClick);
                }
                else {
                    assert($opr.length === 0);
                }
            });
        });
    });
});