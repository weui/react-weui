/**
 * Created by jf on 15/12/9.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Toast, Mask, Icon} = WeUI;

describe('<Toast></Toast>', ()=> {
    [undefined, null, false, true].map((show) => {
        ['toast', 'loading'].map((icon) => {
            describe(`<Toast icon="${icon}" show="${show}"></Toast>`, ()=> {
                const body = '加载中...';
                const wrapper = shallow(
                    <Toast show={show} icon={icon}>
                        {body}
                    </Toast>
                );

                it(`should render <Toast></Toast> component`, () => {
                    assert(wrapper.instance() instanceof Toast);
                    assert(wrapper.find('.weui_toast'));
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
                    assert(!mask.hasClass('weui_mask'));
                    assert(mask.hasClass('weui_mask_transparent'));
                });

                it(`should have a icon`, ()=> {
                    const icon = wrapper.find(Icon).shallow();
                    assert(icon.instance() instanceof Icon);
                });

                it(`should have 'weui_loading_toast' class name when icon is 'loading'`, ()=> {
                    if (icon === 'loading') {
                        assert(wrapper.hasClass('weui_loading_toast'));
                    }
                });

                it(`should have body`, ()=> {
                    const $body = wrapper.find('.weui_toast_content');
                    assert($body.text() === body);
                });
            });
        });
    });
});