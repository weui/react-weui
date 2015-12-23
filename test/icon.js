/**
 * Created by jf on 15/12/9.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Icon} = WeUI;

describe('<Icon>', ()=> {
    [
        'success',
        'success_circle',
        'success_no_circle',
        'safe_success',
        'safe_warn',
        'info',
        'waiting',
        'waiting_circle',
        'circle',
        'warn',
        'download',
        'info_circle',
        'cancel'
    ].map((value) => {
        ['small', 'large'].map((size) => {
            describe(`<Icon value="${value}"/>`, ()=> {
                const wrapper = shallow(
                    <Icon value={value} size={size}/>
                );

                it(`should render <Icon></Icon> component`, ()=> {
                    assert(wrapper.instance() instanceof Icon);
                });

                it(`should have class 'weui_icon_${value}'`, ()=> {
                    assert(wrapper.hasClass(`weui_icon_${value}`));
                });

                it(`should have 'weui_icon_msg' when size is large`, ()=> {
                    if (size === 'large') {
                        assert(wrapper.hasClass('weui_icon_msg'));
                    }
                    else {
                        assert(!wrapper.hasClass('weui_icon_msg'));
                    }
                });
            });
        })
    });

    describe('loading', ()=> {
        const wrapper = shallow(
            <Icon value="loading"/>
        );

        it(`should have 'weui_loading' class name`, ()=> {
            assert(wrapper.hasClass('weui_loading'));
        });
    })
});