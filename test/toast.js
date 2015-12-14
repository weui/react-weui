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
    const body = '加载中...';
    const wrapper = shallow(
        <Toast>
            {body}
        </Toast>
    );

    it(`should render <Toast></Toast> component`, () => {
        assert(wrapper.instance() instanceof Toast);
        assert(wrapper.hasClass('weui_toast'));
    });

    it(`should be hidden when active is false`, ()=> {
        assert(wrapper.state('active') === false);
        assert(wrapper.prop('style').display === 'none');
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

    it(`should have body`, ()=> {
        const $body = wrapper.find('.weui_toast_content');
        assert($body.text() === body);
    });

    it(`should have 'show' & 'hide' method`, ()=> {
        // TODO
    });
});