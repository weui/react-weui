import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {PanelHeader} = WeUI;

describe('<PanelHeader></PanelHeader>', ()=> {

    ['Panel header wording', <img src="http://mmrb.github.io/avatar/jf.jpg" />, <p>Panel header wording</p>].map((child)=>{
        describe(`<PanelHeader>${child}</PanelHeader>`, ()=>{
            const wrapper = shallow(
                <PanelHeader>{child}</PanelHeader>
            );

            it(`should have 'weui-panel__hd' class name`, ()=>{
                assert(wrapper.hasClass(`weui-panel__hd`));
            });

            it(`should have child ${child}`, ()=>{
                assert(wrapper.contains(child));
            });
        });
    });



});