import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';
import sinon from 'sinon';

const {Agreement} = WeUI;

describe('<Agreement></Agreement>', ()=> {

    ['wording', <img src="http://mmrb.github.io/avatar/jf.jpg" />, <div><h2 className="title">文章标题</h2><p className="desc">文章描述</p></div>].map((child)=>{
        describe(`<Agreement>${child}</Agreement>`, ()=>{
            const customClassName = 'customClassName1 customClassName2';
            const cb = sinon.spy()
            const wrapper = shallow(
                <Agreement className={customClassName} onClick={cb}>{child}</Agreement>
            );

            it(`should have 'weui-agree' class name`, ()=>{
                assert(wrapper.hasClass(`weui-agree`));
            });

            it(`should have 'weui-agree__text' class name`, ()=>{
                assert(wrapper.find('span').hasClass(`weui-agree__text`));
            });

            it(`should have custom class name ${customClassName}`, ()=> {
                assert(wrapper.hasClass(customClassName));
            });

            it(`should have child ${child}`, ()=>{
                assert(wrapper.contains(child));
            });

            it(`should have trigger onclick`, ()=>{
                wrapper.find('input').simulate('click')
                assert(cb.called);
            });
        });
    });

});