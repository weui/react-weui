import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {PanelFooter} = WeUI;

describe('<PanelFooter></PanelFooter>', ()=> {

    ['Panel footer wording', <img src="http://mmrb.github.io/avatar/bear.jpg" />].map((child)=>{
        describe(`<PanelFooter>${child}</PanelFooter>`, ()=>{
            const wrapper = shallow(
                <PanelFooter>{child}</PanelFooter>
            );

            it(`should have 'weui-panel__ft' class name`, ()=>{
                assert(wrapper.hasClass(`weui-panel__ft`));
            });

            it(`should have child ${child}`, ()=>{
                assert(wrapper.contains(child));
            });
        });
    });

});