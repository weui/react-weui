import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {FormCell, CellHeader, CellBody, CellFooter} = WeUI;

describe('<FormCell></FormCell>', ()=> {
    [true, false].map(_switch=>{
        ['before', null, 'after'].map(selectPos=>{
            [true, false].map(select=>{
                [true, false].map(checkbox=>{
                    [true, false].map(radio=>{
                        [true, false].map(warn=>{
                            [true, false].map(vcode=>{
                                [undefined, null, 'custom_class'].map((clazz) => {
                                    describe(`<FormCell className="${clazz}" switch="${_switch}" vcode="${vcode}" warn="${warn}" checkbox="${checkbox}" radio="${radio}" select="${select}" select="${selectPos}"></FormCell>`, ()=>{
                                        const header = <CellHeader><img src="http://mmrmb.github.io/avatar/bear.jpg" alt=""/></CellHeader>;
                                        const body = <CellBody><div><h2 className="title">标题</h2><p className="desc">描述</p></div></CellBody>;
                                        const footer = <CellFooter>footer</CellFooter>;
                                        const wrapper = shallow(
                                            <FormCell className={clazz} vcode={vcode} warn={warn} radio={radio} checkbox={checkbox} select={select} selectPos={selectPos} switch={_switch}>
                                                {header}
                                                {body}
                                                {footer}
                                            </FormCell>
                                        );

                                        it(`should render <FormCell></FormCell> component `, ()=>{
                                            assert(wrapper.instance() instanceof FormCell);
                                        });

                                        it(`should have 'weui-cell' class name`, ()=>{
                                            assert(wrapper.hasClass(`weui-cell`));
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

                                        it(`should have 'weui-cell_vcode' when vcode attribute is true`, ()=> {
                                            if (vcode) {
                                                assert(wrapper.hasClass(`weui-cell_vcode`));
                                            }
                                        });

                                        it(`should have 'weui-cell_warn' when warn attribute is true`, ()=> {
                                            if (warn) {
                                                assert(wrapper.hasClass(`weui-cell_warn`));
                                            }
                                        });

                                        it(`should have 'weui-cell_switch' when switch attribute is true`, ()=> {
                                            if (_switch) {
                                                assert(wrapper.hasClass(`weui-cell_switch`));
                                            }
                                        });

                                        it(`should have 'weui-cell_select' when select attribute is true`, ()=> {
                                            if (select) {
                                                assert(wrapper.hasClass(`weui-cell_select`));
                                            }
                                        });

                                        it(`should have 'weui-cell_select-before' when selectPos attribute is before`, ()=> {
                                            if (selectPos == 'before') {
                                                assert(wrapper.hasClass(`weui-cell_select-before`));
                                            }
                                        });

                                        it(`should have 'weui-cell_select-after' when selectPos attribute is after`, ()=> {
                                            if (selectPos == 'after') {
                                                assert(wrapper.hasClass(`weui-cell_select-after`));
                                            }
                                        });

                                        it(`should have 'weui-check__label' when radio attribute is true`, ()=> {
                                            if (radio) {
                                                assert(wrapper.hasClass(`weui-check__label`));
                                            }
                                        });

                                        it(`should have 'weui-check__label' when checkbox attribute is true`, ()=> {
                                            if (checkbox) {
                                                assert(wrapper.hasClass(`weui-check__label`));
                                            }
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});