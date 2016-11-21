import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Toast, Mask, Icon} = WeUI;

describe('<Toast></Toast>', ()=> {
    ['small', 'large'].map((iconSize) => {
        [undefined, null, false, true].map((show) => {
            ['toast', 'loading'].map((icon) => {
                describe(`<Toast icon="${icon}" iconSize="${iconSize}" show="${show}"></Toast>`, ()=> {
                    const body = '加载中...';
                    const wrapper = shallow(
                        <Toast show={show} icon={icon} iconSize={iconSize}>
                            {body}
                        </Toast>
                    );

                    it(`should render <Toast></Toast> component`, () => {
                        assert(wrapper.instance() instanceof Toast);
                        assert(wrapper.find('.weui-toast'));
                    });

                    it(`should be hidden when 'show' attribute is false`, ()=> {
                        if (show) {
                            assert(wrapper.prop('style').display === 'block');
                        }
                        else {
                            assert(wrapper.prop('style').display === 'none');
                        }
                    });

                    it(`should have a transparent mask`, ()=> {
                        const mask = wrapper.find(Mask).shallow();
                        assert(mask.instance() instanceof Mask);
                        assert(!mask.hasClass('weui-mask'));
                        assert(mask.hasClass('weui-mask_transparent'));
                    });

                    it(`should have a icon`, ()=> {
                        const icon = wrapper.find(Icon).shallow();
                        assert(icon.instance() instanceof Icon);
                    });

                    it(`should have a icon with appropriate size`, ()=> {
                        const icon = wrapper.find(Icon).shallow();
                        assert(icon.instance() instanceof Icon);
                    });

                    it(`should have a icon with appropriate size: ${iconSize}`, ()=> {
                        const iconWrapper = wrapper.find(Icon).shallow();
                        //exclude loading case
                        if(icon != 'loading'){
                            if (iconSize === 'large') {
                                assert(iconWrapper.hasClass('weui-icon_msg'));
                            }
                            else {
                                assert(!iconWrapper.hasClass('weui-icon_msg'));
                            }
                        }
                    });

                    it(`should have 'weui-loading' and 'weui-icon_toast' class name when icon is 'loading'`, ()=> {
                        if (icon === 'loading') {
                            let $icon = wrapper.find(Icon).shallow()
                            assert($icon.hasClass('weui-loading'));
                            assert($icon.hasClass('weui-icon_toast'));
                        }
                    });

                    it(`should have body`, ()=> {
                        const $body = wrapper.find('.weui-toast_content');
                        assert($body.text() === body);
                    });
                });
            });
        });
    });
});