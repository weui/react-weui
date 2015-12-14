/**
 * Created by jf on 15/12/9.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Dialog, Mask} = WeUI;
const {Alert, Confirm} = Dialog;

describe('<Dialog></Dialog>', ()=> {
    describe('<Alert></Alert>', ()=> {
        const title = '提示';
        const body = '警告内容';
        const buttons = [{
            label: '取消',
            type: 'default',
            onClick: ()=> {
            }
        }, {
            label: '确定',
            type: 'primary',
            onClick: ()=> {
            }
        }];
        const wrapper = shallow(
            <Alert title={title} buttons={buttons}>
                {body}
            </Alert>
        );

        it('should render <Alert></Alert> component', () => {
            assert(wrapper.instance() instanceof Alert);
            assert(wrapper.hasClass('weui_dialog_alert'));
        });

        it(`should render a non transparent <Mask></Mask>`, ()=> {
            const mask = wrapper.find(Mask).shallow();
            assert(mask.instance() instanceof Mask);
            assert(mask.hasClass('weui_mask'));
            assert(!mask.hasClass('weui_mask_transparent'));
        });

        it(`should have title ${title}`, ()=> {
            const $title = wrapper.find('.weui_dialog_title');
            assert($title.text() === title);
        });

        it(`should have body ${body}`, ()=> {
            const $body = wrapper.find('.weui_dialog_bd');
            assert($body.text() === body);
        });

        it(`should render ${buttons.length} buttons`, ()=> {
            const $buttons = wrapper.find('.weui_btn_dialog');
            assert($buttons.length === buttons.length);

            $buttons.map(($button, index) => {
                assert($button.text() === buttons[index].label);
                assert($button.hasClass(buttons[index].type));
                assert($button.prop('onClick') === buttons[index].onClick);
            });
        });

        it(`should have 'show' & 'hide' method`, ()=> {
            // TODO
        });
    });

    describe('<Confirm></Confirm>', ()=> {
        const title = '提示';
        const body = '确认内容';
        const buttons = [{
            label: '取消',
            type: 'default',
            onClick: ()=> {
            }
        }, {
            label: '确定',
            type: 'primary',
            onClick: ()=> {
            }
        }];
        const wrapper = shallow(
            <Confirm title={title} buttons={buttons}>
                {body}
            </Confirm>
        );

        it('should render <Confirm></Confirm> component', () => {
            assert(wrapper.instance() instanceof Confirm);
            assert(wrapper.hasClass('weui_dialog_confirm'));
        });

        it(`should render a non transparent <Mask></Mask>`, ()=> {
            const mask = wrapper.find(Mask).shallow();
            assert(mask.instance() instanceof Mask);
            assert(mask.hasClass('weui_mask'));
            assert(!mask.hasClass('weui_mask_transparent'));
        });

        it(`should have title ${title}`, ()=> {
            const $title = wrapper.find('.weui_dialog_title').shallow();
            assert($title.text() === title);
        });

        it(`should have body ${body}`, ()=> {
            const $body = wrapper.find('.weui_dialog_bd').shallow();
            assert($body.text() === body);
        });

        it(`should render ${buttons.length} buttons`, ()=> {
            const $buttons = wrapper.find('.weui_btn_dialog');
            assert($buttons.length === buttons.length);

            $buttons.map(($button, index) => {
                assert($button.text() === buttons[index].label);
                assert($button.hasClass(buttons[index].type));
                assert($button.prop('onClick') === buttons[index].onClick);
            });
        });

        it(`should have 'show' & 'hide' method`, ()=> {
            // TODO
        });
    });
});