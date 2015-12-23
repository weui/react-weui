/**
 * Created by jf on 15/12/9.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import assert from 'assert';
import WeUI from '../src/index';

const {Progress} = WeUI;

describe('<Progress></Progress>', ()=> {
    [undefined, null, sinon.spy()].map((onClick) => {
        [-10, 0, 10, 110].map((value) => {
            describe(`<Progress></Progress>`, () => {
                const wrapper = shallow(
                    <Progress value={value} onClick={onClick}/>
                );

                it(`should render <Progress></Progress> component`, ()=> {
                    assert(wrapper.instance() instanceof Progress);
                    assert(wrapper.hasClass('weui_progress'));
                });

                it(`should have .weui_progress_inner_bar element with width ${value}%`, ()=> {
                    const $bar = wrapper.find('.weui_progress_inner_bar');
                    if (value < 0) {
                        assert($bar.prop('style').width === `0%`);
                    }
                    else if (value > 100) {
                        assert($bar.prop('style').width === `100%`);
                    }
                    else {
                        assert($bar.prop('style').width === `${value}%`);
                    }
                });

                it(`should have .weui_progress_opr element with 'onClick' attribute`, ()=> {
                    if (onClick) {
                        assert(wrapper.find('.weui_progress_opr').prop('onClick') === onClick)
                    }
                    else {
                        assert(wrapper.find('.weui_progress_opr').length === 0);
                    }
                });
            });
        });
    });
});