/*global before*/
import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';
var jsdom = require('jsdom');

const { CityPicker, Picker, PickerGroup, Mask } = WeUI

describe('<CityPicker></CityPicker>', ()=>{
    const data = [
        {
            "name":"city1",
            "code":"110000",
            "sub": [
                {
                    "name": "city1-1",
                    "code": "110000",
                    "sub": [
                        {
                            "name": "city1-1-1",
                            "code": "110000",
                        }
                    ]
                },
                {
                    "name": "city1-2",
                    "code": "110000",
                    "sub": [
                        {
                            "name": "city1-2-1",
                            "code": "110000",
                        }
                    ]
                }
            ]
        }
    ]

    it('should render CityPicker and Picker', ()=>{
        const wrapper = mount(<CityPicker data={data}/>)
        assert(wrapper.instance() instanceof CityPicker)
        assert(wrapper.find(Picker).length > 0)
    })

    it('should trigger onCancel on Picker', ()=>{
        let cb = sinon.spy()
        const wrapper = mount(<CityPicker data={data} onCancel={cb} show/>)

        let mask = wrapper.find(Mask);

        mask.simulate('click')
        setTimeout(()=>assert(cb.calledOnce == true), 500)
    })

    it('should render 3 pickergroup', ()=>{
        const wrapper = mount(<CityPicker data={data} show/>)
        let $pickergroup = wrapper.find(PickerGroup);
        assert($pickergroup.length == 3)
    })

    it('should update onChange after selected', ()=>{
        let cb = sinon.spy()
        const wrapper = mount(
            <CityPicker
            selected={[0,0,0]}
            data={data}
            onChange={cb}
            show/>
        )
        let $pickergroup = wrapper.find(PickerGroup).last();

        $pickergroup.simulate('touchStart', {
            targetTouches: [
              {
                identifier: 'test',
                pageY: 500
              }
            ]
        })

        $pickergroup.simulate('touchMove', {
            targetTouches: [
              {
                identifier: 'test',
                pageY: 538
              }
            ]
        })

        $pickergroup.simulate('touchEnd')

        const $btn = wrapper.find('.weui-picker__action').last()

        $btn.simulate('click')

        setTimeout(()=>assert(cb.calledOnce == true), 500)
    })

    it('should change pickergroup item when scroll on parent group', ()=>{
        const wrapper = mount(
            <CityPicker
            selected={[0,0,0]}
            data={data}
            show/>
        )
        let $parent = wrapper.find(PickerGroup).at(1);
        let $child = wrapper.find(PickerGroup).last();

        //assert original
        assert($child.find('.weui-picker__item').text() == 'city1-1-1')

        $parent.simulate('touchStart', {
            targetTouches: [
              {
                identifier: 'test',
                pageY: 500
              }
            ]
        })

        $parent.simulate('touchMove', {
            targetTouches: [
              {
                identifier: 'test',
                pageY: 450
              }
            ]
        })

        $parent.simulate('touchEnd')

        //assert after change
        assert($child.find('.weui-picker__item').text() == 'city1-2-1')
    })
})