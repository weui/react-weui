import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Icon} = WeUI;

describe('<Icon>', ()=> {
    [
        'success',
        'success-circle',
        'success-no-circle',
        'safe-success',
        'safe-warn',
        'info',
        'waiting',
        'waiting-circle',
        'circle',
        'warn',
        'download',
        'info-circle',
        'cancel',
        //depreciate check
        'success_circle',
    ].map((value) => {
        ['small', 'large'].map((size) => {
            describe(`<Icon value="${value}"/>`, ()=> {
                const wrapper = shallow(
                    <Icon value={value} size={size}/>
                );

                it(`should render <Icon></Icon> component`, ()=> {
                    assert(wrapper.instance() instanceof Icon);
                });

                it(`should have class 'weui-icon-${value}'`, ()=> {
                    assert(wrapper.hasClass(`weui-icon-${value}`));
                });

                it(`should have 'weui-icon_msg' when size is large`, ()=> {
                    if (size === 'large') {
                        assert(wrapper.hasClass('weui-icon_msg'));
                    }
                    else {
                        assert(!wrapper.hasClass('weui-icon_msg'));
                    }
                });
            });
        })
    });

    describe('loading', ()=> {
        const wrapper = shallow(
            <Icon value="loading"/>
        );

        it(`should have 'weui-loading' class name`, ()=> {
            assert(wrapper.hasClass('weui-loading'));
        });
    })
});