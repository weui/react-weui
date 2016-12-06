/*global before*/
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';
var jsdom = require('jsdom');

const { Slider } = WeUI;

describe('<Slider></Slider>', ()=>{
  before(() => {
      global.document = jsdom.jsdom('<!DOCTYPE html><html><head></head><body></body></html>');
      global.window = document.defaultView;
  });

  //mocking touch
  const simulateTouch = (wrapper, distance, ogX = 500)=> {
      const $handler = wrapper.find('.weui-slider__handler');

      $handler.simulate('touchStart', {
        targetTouches: [
          {
            identifier: 'test',
            pageX: ogX
          }
        ]
      })

      $handler.simulate('touchMove', {
        targetTouches: [
          {
            identifier: 'test',
            pageX: ogX + distance
          }
        ]
      })

      $handler.simulate('touchEnd')
  }

  it('render a Slider with weui-slider-box wrapper', ()=>{
      const wrapper = mount(<Slider />);
      assert(wrapper.instance() instanceof Slider);
      assert(wrapper.find('.weui-slider-box').length > 0);
  })

  it('can slide left/right and trigger onChange', ()=>{
      let value = 1,
          cb = v => value = v

      const wrapper = mount(
        <Slider
          min={1}
          max={100}
          step={1}
          defaultValue={50}
          onChange={ cb }
        />
      );

      let $node = ReactDOM.findDOMNode(wrapper.instance())
      let $renderedBar = $node.querySelector('.weui-slider__inner');

      $renderedBar.clientWidth = 500

      //checking touch move right
      simulateTouch(wrapper, 49)
      assert(value === 60)

      //checking touch move left
      simulateTouch(wrapper, -100)
      assert(value === 40)
  })

  it('should void changes with disabled', ()=>{
      let value = 50,
          cb = v => value = v

      const wrapper = mount(
        <Slider
          min={1}
          max={100}
          step={1}
          defaultValue={50}
          onChange={ cb }
          disabled
        />
      );

      let $node = ReactDOM.findDOMNode(wrapper.instance())
      let $renderedBar = $node.querySelector('.weui-slider__inner');

      $renderedBar.clientWidth = 500

      //checking touch move right
      simulateTouch(wrapper, 50)
      assert(value === 50)
  })

  it('should render value with showValue', ()=>{
      [true, false].map(showValue=>{
        const wrapper = mount(
          <Slider
            min={1}
            max={100}
            step={1}
            showValue={showValue}
          />
        );

        if(showValue){
          assert(wrapper.find('.weui-slider-box__value').length > 0)
        }else{
          assert(wrapper.find('.weui-slider-box__value').length == 0)
        }
      })
  })

})