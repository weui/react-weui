import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const { Flex, FlexItem } = WeUI;

describe('<Flex></Flex>', ()=> {

    describe(`<Flex></Flex>`, ()=>{
        const wrapper = shallow(
            <Flex> <FlexItem>1</FlexItem> </Flex>
        );

        it(`should have 'weui-flex' class name`, ()=>{
            assert(wrapper.hasClass(`weui-flex`))
        });

        it(`flex item should have 'weui-flex__item' class`, ()=>{
            assert(wrapper.find(FlexItem).shallow().hasClass('weui-flex__item'));
        });
    });

});