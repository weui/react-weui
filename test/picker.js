/*global before*/
import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';
var jsdom = require('jsdom');

const { Picker, PickerGroup, Mask } = WeUI

describe('<Picker></Picker>', ()=>{
    before(() => {
      global.document = jsdom.jsdom('<!DOCTYPE html><html><head></head><body></body></html>');
      global.window = document.defaultView;
    });

    it('should render Picker', ()=>{
        const wrapper = mount(<Picker />)
        assert(wrapper.instance() instanceof Picker)
    })

    it('should render PickerGroup', ()=>{
        const groups = [
            {
                items: [
                    {
                        label: 'Item1'
                    },
                    {
                        label: 'Item2 (Disabled)',
                        disabled: true
                    },
                    {
                        label: 'Item3'
                    },
                ]
            },
            {
                items: [
                    {
                        label: '2-Item1'
                    },
                    {
                        label: '2-Item2 (Disabled)',
                        disabled: true
                    },
                    {
                        label: '2-Item3'
                    },
                ]
            }
        ]

        const wrapper = mount(
            <Picker show groups={groups} />
        )

        assert(wrapper.find(PickerGroup).length == 2)
    })

    it('should change value state whith touch event', ()=>{
        const groups = [
            {
                items: [
                    {
                        label: 'Item1'
                    },
                    {
                        label: 'Item2 (Disabled)',
                        disabled: true
                    },
                    {
                        label: 'Item3'
                    },
                    {
                        label: 'Item4'
                    },
                    {
                        label: 'Item5'
                    }
                ]
            }
        ]

        const wrapper = mount(
            <Picker show groups={groups} />
        )

        const $handler = wrapper.find(PickerGroup);

        let ogSelected = wrapper.state().selected[0];

        $handler.simulate('touchStart', {
            targetTouches: [
              {
                identifier: 'test',
                pageY: 500
              }
            ]
        })

        $handler.simulate('touchMove', {
            targetTouches: [
              {
                identifier: 'test',
                pageY: 538
              }
            ]
        })

        $handler.simulate('touchEnd')

        assert(wrapper.state().selected[0] == (ogSelected - 1) )

    })

    it('should stay same item when not moving enough', ()=>{
        const groups = [
            {
                items: [
                    {
                        label: 'Item1'
                    },
                    {
                        label: 'Item2 (Disabled)',
                        disabled: true
                    },
                    {
                        label: 'Item3'
                    },
                    {
                        label: 'Item4'
                    },
                    {
                        label: 'Item5'
                    }
                ]
            }
        ]

        const wrapper = mount(
            <Picker show groups={groups} />
        )

        const $handler = wrapper.find(PickerGroup);

        let ogSelected = wrapper.state().selected[0];

        $handler.simulate('touchStart', {
            targetTouches: [
              {
                identifier: 'test',
                pageY: 500
              }
            ]
        })

        $handler.simulate('touchMove', {
            targetTouches: [
              {
                identifier: 'test',
                pageY: 515
              }
            ]
        })

        $handler.simulate('touchEnd')
        assert(wrapper.state().selected[0] == ogSelected)

    })

    it('should render 2 action button by default', ()=> {
        const wrapper = mount(
            <Picker show />
        )

        assert(wrapper.find('.weui-picker__action').length == 2)
    })

    it('should trigger onCancel when click cancel', ()=>{
        let cb = sinon.spy()
        const wrapper = mount(
            <Picker show onCancel={cb} />
        )

        const $btn = wrapper.find('.weui-picker__action').first()

        $btn.simulate('click')

        //after closing animation
        setTimeout(()=>assert(cb.calledOnce == true), 500)
    })

    it('should trigger onCancel when click Mask', ()=>{
        let cb = sinon.spy()
        const wrapper = mount(
            <Picker show onCancel={cb} />
        )

        const mask = wrapper.find(Mask)

        mask.simulate('click')

        //after closing animation
        setTimeout(()=>assert(cb.calledOnce == true), 500)
    })

    it('should trigger onGroupChange after scroll', ()=>{
        let value = null, changeCb = (item, i, groupIndex) => value = groupIndex

        const groups = [
            {
                items: [
                    {
                        label: 'Item1'
                    },
                    {
                        label: 'Item2 (Disabled)',
                        disabled: true
                    },
                    {
                        label: 'Item3'
                    },
                    {
                        label: 'Item4'
                    },
                    {
                        label: 'Item5'
                    }
                ]
            }
        ]

        const wrapper = mount(
            <Picker show groups={groups} onGroupChange={changeCb} />
        )

        const $handler = wrapper.find(PickerGroup);

        $handler.simulate('touchStart', {
            targetTouches: [
              {
                identifier: 'test',
                pageY: 500
              }
            ]
        })

        $handler.simulate('touchMove', {
            targetTouches: [
              {
                identifier: 'test',
                pageY: 100
              }
            ]
        })

        $handler.simulate('touchEnd')

        assert(value == 0)
    })

    it('should trigger onChange after scroll and click selected', ()=>{
        let value = '', changeCb = selected => value = selected

        const groups = [
            {
                items: [
                    {
                        label: 'Item1'
                    },
                    {
                        label: 'Item3'
                    },
                ]
            }
        ]

        const wrapper = mount(
            <Picker show groups={groups} onChange={changeCb} />
        )

        const $handler = wrapper.find(PickerGroup);

        $handler.simulate('touchStart', {
            targetTouches: [
              {
                identifier: 'test',
                pageY: 500
              }
            ]
        })

        $handler.simulate('touchMove', {
            targetTouches: [
              {
                identifier: 'test',
                pageY: 1000
              }
            ]
        })

        $handler.simulate('touchEnd')

        const $btn = wrapper.find('.weui-picker__action').last()

        $btn.simulate('click')

        setTimeout(()=>assert(value !== ''), 500)
    })
})