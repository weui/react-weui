/**
 * Created by n7best on 16/2/25.
 */

"use strict";

import React from 'react';
import { shallow, mount } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {TextArea} = WeUI;

describe('<TextArea></TextArea>', ()=> {
    [undefined,'txt',null].map(defaultValue=>{
        [true, false].map(showCounter=>{
            [undefined, null, 'custom_class'].map(clazz => {
                describe(`<TextArea className=${clazz} showCounter=${showCounter} defaultValue=${defaultValue}></TextArea>`, ()=> {
                    let testValue = null;
                    const testOnChange = (e)=>testValue = e.target.value;

                    const wrapper = shallow(
                        <TextArea className={clazz} showCounter={showCounter} defaultValue={defaultValue} onChange={testOnChange}/>
                    );

                    it(`should render <TextArea></TextArea> component`, ()=> {
                        assert(wrapper.instance() instanceof TextArea);
                    });

                    it(`should render textarea component with weui_textarea class`, ()=> {
                        assert(wrapper.find('textarea').hasClass('weui_textarea'));
                    });

                    it(`should render div with weui_icon_checked class if showCounter is true`, ()=> {
                        if(showCounter){
                            assert(wrapper.find('div').children().find('div').hasClass('weui_textarea_counter'));
                        }
                    });

                    it(`should have state of textCounter 3 if defaultValue is txt`, ()=> {
                        if(defaultValue === 'txt'){
                            assert.equal(3,wrapper.state().textCounter);
                        }
                    });

                    it(`should have state of textCounter 5 after simulation input`, ()=> {
                        let _textarea = wrapper.find('textarea');
                        _textarea.simulate('change',{target:{value:'hello'}});
                        assert.equal(5,wrapper.state().textCounter);
                    });

                    it(`should have return the on change event if onChange is state`, ()=> {
                        let _textarea = wrapper.find('textarea'),
                            testString = 'hello';
                        //reset
                        testValue = null;

                        _textarea.simulate('change',{target:{value:testString}});
                        assert.equal(testString,testValue);
                    });

                    it(`should have custom class name ${clazz} when className is not null or empty`, ()=>{
                        if (clazz) {
                            assert(wrapper.find('textarea').hasClass(clazz));
                        }
                    });
                })
            });
        });
    });
});