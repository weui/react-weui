/*global before*/
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import assert from 'assert';
import WeUI from '../src/index';
var jsdom = require('jsdom');

const {ActionSheet, Mask} = WeUI;
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

const androidUA = 'Mozilla/5.0 (Linux; U; Android 4.1.1; en-gb; Build/KLP) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30';
const iosUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B350 Safari/8536.25';

describe('<ActionSheet></ActionSheet>', ()=> {
    [androidUA, iosUA].map(userAgent=>{
        ['ios', 'android', undefined].map(type => {
            [undefined, null, true, false].map((show) => {
                [null, sinon.spy()].map( onRequestClose => {
                    describe(`<ActionSheet menus='${menus}' actions='${actions}' show='${show}' onRequestClose='${onRequestClose}' type='${type}' />`, ()=> {

                        before(() => {
                            global.document = jsdom.jsdom('<!DOCTYPE html><html><head></head><body></body></html>', { userAgent: userAgent });
                            global.window = document.defaultView;
                            global.navigator = { userAgent: userAgent };
                            //console.log('test', window.navigator.userAgent)
                        });

                        const wrapper = mount(
                            <ActionSheet menus={menus} actions={actions} show={show} onRequestClose={onRequestClose} type={type}/>
                        );

                        const wrapperInstance = wrapper.instance();

                        it('should render ActionSheet', () => {
                            assert(wrapperInstance instanceof ActionSheet);
                        });

                        it(`should have a hidden <Mask></Mask> when 'show' prop is false or undefined`, ()=> {
                            const mask = wrapper.find(Mask)
                            if (show) {
                                assert(mask.prop('style').display === 'block');
                            }
                            else {
                                assert(mask.prop('style').display === 'none');
                            }
                        });

                        it(`should have 'onRequestClose' event on Mask when 'show' prop is true`, ()=> {
                            if (show && onRequestClose) {
                                wrapper.find(Mask).simulate('click');
                                assert(onRequestClose.calledOnce === true);
                            }
                        });

                        it(`should have 'weui_actionsheet_toggle' class name when 'show' prop is true`, ()=> {
                            const actionSheet = wrapper.find('.weui-actionsheet');
                            if (show) {
                                assert(actionSheet.hasClass(`weui-actionsheet_toggle`));
                            }
                            else {
                                assert(!actionSheet.hasClass(`weui-actionsheet_toggle`));
                            }
                        });

                        it(`should render ${menus.length} menu items `, ()=> {
                            const menuItems = wrapper.find('.weui-actionsheet__menu').find('.weui-actionsheet__cell');
                            assert(menuItems.length === menus.length);

                            menuItems.map((menuItem, index)=> {
                                const menu = menus[index];
                                assert(menuItem.text() === menu.label);
                                menu.className && assert(menuItem.hasClass(menu.className));
                            });
                        });

                        it(`should render ${actions.length} actions`, ()=> {
                            const actionItems = wrapper.find('.weui-actionsheet__action').find('.weui-actionsheet__cell');
                            assert(actionItems.length === actions.length);

                            actionItems.map((actionItem, index)=> {
                                const action = actions[index];
                                assert(actionItem.text() === action.label);
                                action.className && assert(actionItem.hasClass(action.className));
                            });
                        });

                        if(type == 'android'){
                            it('should have "weui-skin_android" class on main wrapper', ()=> {
                                assert(wrapper.find('div').first().hasClass('weui-skin_android'));
                            });
                        }

                        if(!type && userAgent == androidUA) {
                            wrapper.setState({ isAndroid: true })
                            it(`when no type define, should detect android and have "weui-skin_android" class on main wrapper`, ()=> {
                                assert(wrapper.find('div').first().hasClass('weui-skin_android'));
                            });
                        }

                    });
                })
            });
        })
    })

});