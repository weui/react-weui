import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Select} = WeUI;
const sampleData = [
    {
        value: 1,
        label: 'test1'
    },
    {
        value: 2,
        label: 'test2'
    }
];

describe('<Select></Select>', ()=> {
    [[], sampleData].map(data=>{
        [undefined, null, 'custom_class'].map(clazz => {
            describe(`<Select className=${clazz} data=${data}></Select>`, ()=> {
                const wrapper = shallow(
                    <Select className={clazz} data={data}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </Select>
                );

                it(`should render <Select></Select> component`, ()=> {
                    assert(wrapper.instance() instanceof Select);
                });

                it(`should render Select component with weui-select class`, ()=> {
                    assert(wrapper.find('select').hasClass('weui-select'));
                });

                it(`should render options when child is present and no data`, ()=> {
                    if(data.length == 0){
                        assert.equal('1',wrapper.find('option').first().text());
                    }
                });

                it(`should render data instead of child if data length > 0`, ()=> {
                    if(data.length > 0){
                        assert.equal('test1',wrapper.find('option').first().text());
                    }
                });

                it(`should have custom class name ${clazz} when className is not null or empty`, ()=>{
                    if (clazz) {
                        assert(wrapper.find('select').hasClass(clazz));
                    }
                });
            });
        });
    });
});