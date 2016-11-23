import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const { Badge } = WeUI;
const content = 2;
const presetStyles = {
    'default': {},
    'header': {
        position: 'absolute',
        top: '-.4em',
        right: '-.4em'
    },
    'body': {
        marginLeft: '5px'
    },
    'footer': {
        marginLeft: '5px',
        marginRight: '5px'
    }
}

describe('<Badge></Badge>', ()=> {

    [null, 'default', 'header', 'body', 'footer'].map((preset)=>{
        describe(`<Badge preset='${preset}'>${content}</Badge>`, ()=>{
            const customClassName = 'customClassName1 customClassName2';
            const wrapper = shallow(
                <Badge className={customClassName} preset={preset}> { content } </Badge>
            );

            it(`should have 'weui-badge' class name`, ()=>{
                assert(wrapper.hasClass(`weui-badge`))
            });

            it(`should have custom class name ${customClassName}`, ()=> {
                assert(wrapper.hasClass(customClassName));
            });

            it(`should have preset style ${preset}`, ()=> {
                if(preset){
                    assert(JSON.stringify(wrapper.props().style) == JSON.stringify(presetStyles[preset]))
                }
            })

            it(`should have child 2`, ()=>{
                assert(wrapper.text() == content);
            });
        });
    });

});