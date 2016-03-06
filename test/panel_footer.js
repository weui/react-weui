/**
 * Created by n7best
 */

"use strict";

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

            it(`should render <PanelFooter></PanelFooter> component `, ()=>{
                assert(wrapper.instance() instanceof PanelFooter);
            });

            it(`should have 'weui_panel_ft' class name`, ()=>{
                assert(wrapper.hasClass(`weui_panel_ft`));
            });

            it(`should have child ${child}`, ()=>{
                assert(wrapper.contains(child));
            });
        });
    });

});