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

            it(`should have 'weui-cells' class name`, ()=> {
                assert(wrapper.hasClass(`weui-cells`));
            });

            it(`should have custom class name ${customClassName}`, ()=> {
                assert(wrapper.hasClass(customClassName));
            });

            it(`should have child typeof Cell`, ()=> {
                assert(wrapper.find(Cell).html() === shallow(child).html());
            });
        });
    });
});