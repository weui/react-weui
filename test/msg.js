/**
 * Created by jf on 15/12/9.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Msg, Icon, Button} = WeUI;

describe('<Msg></Msg>', ()=> {
    const type = 'success';
    const title = '成功';
    const description = '感谢你的反馈';
    const buttons = [{
        type: 'primary',
        label: '确定',
        onClick: ()=>{
            console.log('ok');
        }
    }];

    ['success', 'info', 'waiting', 'warn'].map((type) => {
        describe(`<msg type="${type}"></msg>`, ()=> {
            const wrapper = shallow(
                <Msg type={type} title={title} description={description} buttons={buttons} />
            );

            it(`should render <Msg></Msg> component`, ()=> {
                assert(wrapper.instance() instanceof Msg);
                assert(wrapper.hasClass('weui_msg'));
            });

            it(`should have <Icon value="${type}"></Icon>`, ()=> {
                const $icon = wrapper.find(Icon).shallow();
                assert($icon.instance() instanceof Icon);
                assert($icon.hasClass(`weui_icon_${type}`));
            });

            it(`should have title ${title}`, ()=> {
                const $title = wrapper.find('.weui_msg_title');
                assert($title.text() === title);
            });

            it(`should have description ${description}`, ()=> {
                const $desc = wrapper.find('.weui_msg_desc');
                assert($desc.text() === description);
            });

            it(`should render ${buttons.length} buttons`, ()=> {
                const $buttons = wrapper.find(Button).shallow();
                assert($buttons.length === buttons.length);
                $buttons.map(($button, index) => {
                    assert($button.text() === buttons[index].label);
                    assert($button.prop('onClick') === buttons[index].onClick);
                    assert($button.hasClass(`weui_btn_${buttons[index].type}`));
                });
            });
        });
    });
});