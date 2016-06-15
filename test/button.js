/**
 * Created by jf on 15/12/9.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Button} = WeUI;

describe('<Button></Button>', () => {

    ['primary', 'default', 'warn'].map((type)=> {
        ['normal', 'small'].map((size)=> {
            [true, false].map((disabled)=> {
                [true, false].map((isHyperLink) => {
                    [undefined, null, '', 'custom_class'].map((clazz)=>{
                        describe(`<Button type="${type}" size="${size}" disabled="${disabled}" href="${isHyperLink}" className="${clazz}"></Button>`, ()=> {
                            const label = 'ok';
                            const href = 'https://weixin.qq.com';
                            let wrapper;
                            if (isHyperLink) {
                                wrapper = shallow(
                                    <Button type={type} size={size} disabled={disabled} href={href} className={clazz}>{label}</Button>
                                );
                            }
                            else {
                                wrapper = shallow(
                                    <Button type={type} size={size} disabled={disabled} className={clazz}>{label}</Button>
                                );
                            }

                            it('should render <Button></Button> component', () => {
                                assert(wrapper.instance() instanceof Button);
                            });

                            it('should render be a button without `href` attribute', ()=> {
                                if (!isHyperLink) {
                                    assert(wrapper.type() === 'button');
                                }
                            });

                            it('should render be a `a` with `href` attribute', ()=> {
                                if (isHyperLink) {
                                    assert(wrapper.type() === 'a');
                                    assert(wrapper.prop('href') === href);
                                }
                            });

                            it(`should have class with "weui_btn" & weui_btn_${type}`, ()=> {
                                assert(wrapper.hasClass('weui_btn'));
                                assert(wrapper.hasClass(`weui_btn_${type}`));
                            });


                            it(`should have class with "weui_btn_mini" when size is 'small'`, ()=> {
                                if (size === 'small') {
                                    assert(wrapper.hasClass('weui_btn_mini'));
                                }
                                else {
                                    assert(!wrapper.hasClass('weui_btn_mini'));
                                }
                            });

                            it(`should have class with "weui_btn_disabled" and "disabled" attribute when disabled is true`, ()=> {
                                if (disabled) {
                                    assert(wrapper.hasClass('weui_btn_disabled'));
                                    assert(wrapper.prop('disabled'))
                                }
                                else {
                                    assert(!wrapper.hasClass('weui_btn_disabled'));
                                    assert(!wrapper.prop('disabled'));
                                }
                            });

                            it(`should have custom class name ${clazz}`, ()=>{
                                if (clazz) {
                                    assert(wrapper.hasClass(`${clazz}`));
                                }
                            });

                            it(`should have text ${label}`, ()=> {
                                assert(wrapper.text() === label);
                            });
                        });
                    });
                });
            });
        });
    });

});
