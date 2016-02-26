/**
 * Created by n7best on 16/2/25.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Form, FormCell, CellHeader, CellBody, CellFooter} = WeUI;

describe('<Form></Form>', ()=> {

    [true, false].map((radio) => {
        describe(`<Form radio="${radio}"></Form>`, ()=> {
            const child = <FormCell><CellHeader>header</CellHeader><CellBody>body</CellBody><CellFooter>footer</CellFooter></FormCell>;
            const customClassName = 'customClassName1 customClassName2';
            const wrapper = shallow(
                <Form radio={radio} className={customClassName}>{child}</Form>
            );

            it(`should render <Form></Form> component `, ()=> {
                assert(wrapper.instance() instanceof Form);
            });

            it(`should have 'weui_cells_form' class name when radio attribute is false`, ()=> {
                if(!radio){
                    assert(wrapper.hasClass(`weui_cells_form`));
                }
            });

            it(`should have custom class name ${customClassName}`, ()=> {
                assert(wrapper.hasClass(customClassName));
            });

            it(`should have 'weui_cells_radio' when radio attribute is true`, ()=> {
                if (radio) {
                    assert(wrapper.hasClass(`weui_cells_radio`));
                }
            });

            it(`should have child typeof Cell`, ()=> {
                assert(wrapper.find(FormCell).html() === shallow(child).html());
            });
        });
    });

    [true, false].map((checkbox) => {
        describe(`<Form checkbox="${checkbox}"></Form>`, ()=> {
            const child = <FormCell><CellHeader>header</CellHeader><CellBody>body</CellBody><CellFooter>footer</CellFooter></FormCell>;
            const customClassName = 'customClassName1 customClassName2';
            const wrapper = shallow(
                <Form checkbox={checkbox} className={customClassName}>{child}</Form>
            );

            it(`should render <Form></Form> component `, ()=> {
                assert(wrapper.instance() instanceof Form);
            });

            it(`should have 'weui_cells_form' class name when checkbox attribute is false`, ()=> {
                if(!checkbox){
                    assert(wrapper.hasClass(`weui_cells_form`));
                }
            });

            it(`should have custom class name ${customClassName}`, ()=> {
                assert(wrapper.hasClass(customClassName));
            });

            it(`should have 'weui_cells_checkbox' when checkbox attribute is true`, ()=> {
                if (checkbox) {
                    assert(wrapper.hasClass(`weui_cells_checkbox`));
                }
            });

            it(`should have child typeof Cell`, ()=> {
                assert(wrapper.find(FormCell).html() === shallow(child).html());
            });
        });
    });
});