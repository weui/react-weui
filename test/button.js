import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const { Button, PreviewButton } = WeUI;

describe('<PreviewButton></PreviewButton>', () => {
    [true, false].map(primary => {
        describe(`<PreviewButton primary="${primary}">ok</PreviewButton>`, ()=>{
            let wrapper = shallow(
                <PreviewButton primary={primary}>ok</PreviewButton>
            );

            it('should have class with "weui-form-preview__btn"', ()=> {
                assert(wrapper.hasClass('weui-form-preview__btn'));
            });

            it('should have class with "weui-form-preview__btn_default" when not primary', ()=> {
                if (!primary) {
                    assert(wrapper.hasClass('weui-form-preview__btn_default'));
                }
            });

            it('should have class with "weui-form-preview__btn_primary" when primary', ()=> {
                if (primary) {
                    assert(wrapper.hasClass('weui-form-preview__btn_primary'));
                }
            });
        })
    })
})

describe('<Button></Button>', () => {

    describe(`<Button type="vcode"></Button>`, ()=> {
        let wrapper = shallow(
            <Button type="vcode">ok</Button>
        );

        it(`should have class with "weui-vcode-btn"`, ()=> {
            assert(wrapper.hasClass('weui-vcode-btn'));
        });
    });

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

                            it(`should have class with "weui-btn" & weui-btn_${type}`, ()=> {
                                assert(wrapper.hasClass('weui-btn'));
                                assert(wrapper.hasClass(`weui-btn_${type}`));
                            });


                            it(`should have class with "weui-btn_mini" when size is 'small'`, ()=> {
                                if (size === 'small') {
                                    assert(wrapper.hasClass('weui-btn_mini'));
                                }
                                else {
                                    assert(!wrapper.hasClass('weui-btn_mini'));
                                }
                            });

                            it(`should have class with "weui-btn_disabled" and "disabled" attribute when disabled is true`, ()=> {
                                if (disabled) {
                                    assert(wrapper.hasClass('weui-btn_disabled'));
                                    assert(wrapper.prop('disabled'))
                                }
                                else {
                                    assert(!wrapper.hasClass('weui-btn_disabled'));
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
