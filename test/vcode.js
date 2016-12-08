import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {VCode} = WeUI;

describe('<VCode></VCode>', ()=> {
    [undefined, null, 'custom_class'].map(clazz => {
        describe(`<VCode className=${clazz}></VCode>`, ()=> {
            const wrapper = shallow(
                <VCode className={clazz}/>
            );

            it(`should render VCode div should have img with weui-vcode-img class`, ()=> {
                assert(wrapper.find('img').hasClass('weui-vcode-img'));
            });

            it(`should have custom class name ${clazz} when className is not null or empty`, ()=>{
                if (clazz) {
                    assert(wrapper.find('img').hasClass(clazz));
                }
            });
        });
    });
});