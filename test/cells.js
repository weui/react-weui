/**
 * Created by jf on 15/12/9.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Cells, Cell, CellHeader, CellBody, CellFooter} = WeUI;

describe('<Cells></Cells>', ()=> {

    [true, false].map((access) => {
        describe(`<Cells access="${access}"></Cells>`, ()=> {
            const child = <Cell><CellHeader>header</CellHeader><CellBody>body</CellBody><CellFooter>footer</CellFooter></Cell>;
            const customClassName = 'customClassName1 customClassName2';
            const wrapper = shallow(
                <Cells access={access} className={customClassName}>{child}</Cells>
            );

            it(`should render <Cells></Cells> component `, ()=> {
                assert(wrapper.instance() instanceof Cells);
            });

            it(`should have 'weui_cells' class name`, ()=> {
                assert(wrapper.hasClass(`weui_cells`));
            });

            it(`should have custom class name ${customClassName}`, ()=> {
                assert(wrapper.hasClass(customClassName));
            });

            it(`should have 'weui_cells_access' when access attribute is true`, ()=> {
                if (access) {
                    assert(wrapper.hasClass(`weui_cells_access`));
                }
            });

            it(`should have child typeof Cell`, ()=> {
                assert(wrapper.find(Cell).html() === shallow(child).html());
            });
        });
    });
});