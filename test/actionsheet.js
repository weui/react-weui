/**
 * Created by jf on 15/12/9.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import assert from 'assert';
import WeUI from '../src/index';

const {ActionSheet, Mask} = WeUI;

describe('<ActionSheet></ActionSheet>', ()=> {
    [undefined, null, true, false].map((show) => {
        describe(`<ActionSheet></ActionSheet>`, ()=> {
            const menus = [{
                label: '拍照',
                className: 'customClassName1'
            }, {
                label: '从相册中选取',
                className: 'customClassName2'
            }];
            const actions = [{
                label: '取消',
                className: 'customClassName'
            }, {
                label: '确定'
            }];
            const onRequestClose = sinon.spy();
            const wrapper = shallow(
                <ActionSheet menus={menus} actions={actions} show={show} onRequestClose={onRequestClose}/>
            );

            it('should render <ActionSheet></ActionSheet> component', () => {
                assert(wrapper.instance() instanceof ActionSheet);
            });

            it(`should have a hidden <Mask></Mask> when 'show' prop is false or undefined`, ()=> {
                const mask = wrapper.find(Mask).shallow();
                assert(mask.instance() instanceof Mask);
                if (show) {
                    assert(mask.prop('style').display === 'block');
                }
                else {
                    assert(mask.prop('style').display === 'none');
                }
            });

            it(`should have 'onRequestClose' event on Mask when 'show' prop is true`, ()=> {
                if (show) {
                    wrapper.find(Mask).simulate('click');
                    assert(onRequestClose.calledOnce === true);
                }
            });

            it(`should have 'weui_actionsheet_toggle' class name when 'show' prop is true`, ()=> {
                const actionSheet = wrapper.find('.weui_actionsheet');
                if (show) {
                    assert(actionSheet.hasClass(`weui_actionsheet_toggle`));
                }
                else {
                    assert(!actionSheet.hasClass(`weui_actionsheet_toggle`));
                }
            });

            it(`should render ${menus.length} menu items `, ()=> {
                const menuItems = wrapper.find('.weui_actionsheet_menu').shallow().find('.weui_actionsheet_cell');
                assert(menuItems.length === menus.length);

                menuItems.map((menuItem, index)=> {
                    const menu = menus[index];
                    assert(menuItem.text() === menu.label);
                    menu.className && assert(menuItem.hasClass(menu.className));
                });
            });

            it(`should render ${actions.length} actions`, ()=> {
                const actionItems = wrapper.find('.weui_actionsheet_action').shallow().find('.weui_actionsheet_cell');
                assert(actionItems.length === actions.length);

                actionItems.map((actionItem, index)=> {
                    const action = actions[index];
                    assert(actionItem.text() === action.label);
                    action.className && assert(actionItem.hasClass(action.className));
                });
            });
        });
    });
});