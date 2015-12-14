/**
 * Created by jf on 15/12/9.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Cell, CellHeader, CellBody, CellFooter} = WeUI;

describe('<Cell></Cell>', ()=> {

    [undefined, null, 'custom_class'].map((clazz) => {
        describe(`<Cell className="${clazz}"></Cell>`, ()=>{
            const header = <CellHeader><img src="http://mmrmb.github.io/avatar/bear.jpg" alt=""/></CellHeader>;
            const body = <CellBody><div><h2 className="title">标题</h2><p className="desc">描述</p></div></CellBody>;
            const footer = <CellFooter>footer</CellFooter>;
            const wrapper = shallow(
                <Cell className={clazz}>
                    {header}
                    {body}
                    {footer}
                </Cell>
            );

            it(`should render <Cell></Cell> component `, ()=>{
                assert(wrapper.instance() instanceof Cell);
            });

            it(`should have 'weui_cell' class name`, ()=>{
                assert(wrapper.hasClass(`weui_cell`));
            });

            it(`should have custom class name ${clazz} when className is not null or empty`, ()=>{
                if (clazz) {
                    assert(wrapper.hasClass(clazz));
                }
            });

            it(`should have header child`, ()=>{
                assert(shallow(header).html() === wrapper.find(CellHeader).html());
            });

            it(`should have body child`, ()=>{
                assert(shallow(body).html() === wrapper.find(CellBody).html());
            });

            it(`should have footer child`, ()=>{
                assert(shallow(footer).html() === wrapper.find(CellFooter).html());
            });
        });
    });
});