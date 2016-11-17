import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Mask} = WeUI;

describe('<Mask></Mask>', ()=> {
    [true, false].map((transparent) => {
        describe(`<Mask transparent=${transparent}></Mask>`, ()=> {
            const wrapper = shallow(
                <Mask transparent={transparent}/>
            );

            it(`should render <Mask></Mask> component`, ()=> {
                assert(wrapper.instance() instanceof Mask);
            });

            it(`should transparent with transparent attribute`, ()=> {
                if (transparent) {
                    assert(!wrapper.hasClass('weui-mask'));
                    assert(wrapper.hasClass('weui-mask_transparent'));
                }
                else {
                    assert(wrapper.hasClass('weui-mask'));
                    assert(!wrapper.hasClass('weui-mask_transparent'));
                }
            })
        })
    })
});