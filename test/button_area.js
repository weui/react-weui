/**
 * Created by jf on 15/12/11.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {ButtonArea, Button} = WeUI;

describe('<ButtonArea></ButtonArea>', () => {
    [undefined, null, '', 'vertical', 'horizontal'].map((direction)=> {
        describe(`<ButtonArea direction="${direction}"></ButtonArea>`, ()=> {
            const child = <Button>确定</Button>;
            const wrapper = shallow(
                <ButtonArea direction={direction}>
                    {child}
                </ButtonArea>
            );

            it(`should render a <ButtonArea></ButtonArea> component`, ()=> {
                assert(wrapper.instance() instanceof ButtonArea);
            });

            it(`should have 'weui_btn_area' class name`, ()=> {
                assert(wrapper.hasClass(`weui_btn_area`));
            });

            it(`should have 'weui_btn_area_inline' when direction equal 'horizontal'`, ()=> {
                if (direction === 'horizontal') {
                    assert(wrapper.hasClass(`weui_btn_area_inline`));
                }
                else {
                    assert(!wrapper.hasClass(`weui_btn_area_inline`));
                }
            });

            it(`should have children`, () => {
                assert(wrapper.find(Button).html() === shallow(child).html());
            });
        });
    });
});