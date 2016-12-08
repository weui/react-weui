import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Checkbox} = WeUI;

describe('<Checkbox></Checkbox>', ()=> {
    [undefined, null, 'custom_class'].map(clazz => {
        describe(`<Checkbox className=${clazz}></Checkbox>`, ()=> {
            const wrapper = shallow(
                <Checkbox className={clazz}/>
            );

            it(`should render Checkbox input component with weui-check class`, ()=> {
                assert(wrapper.find('input').hasClass('weui-check'));
            });

            it(`should render span with weui-icon-checked class`, ()=> {
                assert(wrapper.find('span').hasClass('weui-icon-checked'));
            });

            it(`should have custom class name ${clazz} when className is not null or empty`, ()=>{
                if (clazz) {
                    assert(wrapper.find('input').hasClass(clazz));
                }
            });
        });
    });
});