/*global before*/
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import assert from 'assert';
import WeUI from '../src/index';

const { Popup, PopupHeader, Mask } = WeUI;

describe('<PopupHeader></PopupHeader>', ()=>{
    const leftcb = sinon.spy(), rightcb = sinon.spy(), left = 'test1', right = 'test2'
    const wrapper = shallow(
        <PopupHeader
            left={left}
            right={right}
            leftOnClick={leftcb}
            rightOnClick={rightcb}
        />
    )

    it('should render weui-popup__hd', ()=>{
        assert(wrapper.hasClass('weui-popup__hd'))
    })

    it('should render two action with class weui-popup__action', ()=> {
        assert(wrapper.find('.weui-popup__action').length == 2)
    })

    it('should render left action texts', ()=>{
        assert(wrapper.find('.weui-popup__action').first().shallow().text() === left)
        assert(wrapper.find('.weui-popup__action').last().shallow().text() === right)
    })

    it('should trigger button clicks', ()=>{
        wrapper.find('.weui-popup__action').first().simulate('click');
        wrapper.find('.weui-popup__action').last().simulate('click');
        assert(leftcb.calledOnce)
        assert(rightcb.calledOnce)
    })
})

describe('<Popup></Popup>', ()=>{
    [true, false].map(show=>{
        [true, false].map(enableMask=>{
            [null, sinon.spy()].map(onRequestClose=>{
                describe(`<Popup show=${show} enableMask=${enableMask} onRequestClose=${onRequestClose}></Popup>`, ()=>{
                    const content = 'test'
                    const wrapper = mount(
                        <Popup
                            show={show}
                            enableMask={enableMask}
                            onRequestClose={onRequestClose}
                        >
                            {content}
                        </Popup>
                    )

                    const wrapperInstance = wrapper.instance();

                    it('should render Popup', () => {
                        assert(wrapperInstance instanceof Popup);
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

                    it(`should have 'weui-popup_toggle' class name when 'show' prop is true`, ()=> {
                        const actionSheet = wrapper.find('.weui-popup');
                        if (show) {
                            assert(actionSheet.hasClass(`weui-popup_toggle`));
                        }
                        else {
                            assert(!actionSheet.hasClass(`weui-popup_toggle`));
                        }
                    });

                    it(`should have 'onRequestClose' event on Mask when 'show' prop is true`, ()=> {
                        if (show && onRequestClose) {
                            wrapper.find(Mask).simulate('click');
                            assert(onRequestClose.calledOnce === true);
                        }
                    });
                })
            })
        })
    })
})