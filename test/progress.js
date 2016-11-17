import React from 'react';
import { shallow, mount } from 'enzyme';
import assert from 'assert';
import sinon from 'sinon';
import WeUI from '../src/index';

const {Progress} = WeUI;

describe('<Progress></Progress>', ()=> {
    [undefined, null, sinon.spy()].map((onClick) => {
        [-10, 0, 10, 110].map((value) => {
            [true, false].map(showCancel => {
                describe(`<Progress value='${value}' onClick='${onClick}' showCancel='${showCancel}'></Progress>`, () => {
                    let wrapper = shallow(
                        <Progress value={value} onClick={onClick} showCancel={showCancel}/>
                    );

                    it(`should render <Progress></Progress> component`, ()=> {
                        //not detecting for stateless component
                        //assert(wrapper.instance() instanceof Progress);
                        assert(wrapper.hasClass('weui-progress'));
                    });

                    it(`should have weui-progress__bar with .weui-progress__inner-bar element with width ${value}%`, ()=> {
                        const $barwrapper = wrapper.find('.weui-progress__bar');
                        const $bar = $barwrapper.find('.weui-progress__inner-bar');

                        assert($barwrapper.hasClass('weui-progress__bar'));


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

                    it(`should have .weui-progress__opr element with 'onClick' attribute`, ()=> {
                        if (showCancel) {
                            assert(wrapper.find('.weui-progress__opr').length === 1);
                            if(onClick){
                                wrapper.find('.weui-progress__opr').simulate('click');
                                assert(onClick.called)
                            }
                        }
                        else {
                            assert(wrapper.find('.weui-progress__opr').length === 0);
                        }
                    });
                });
            })
        });
    });
});