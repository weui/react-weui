/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import {ButtonArea, Button, Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} from '../../../src/index';
import Page from '../../component/page';
import Icon from './images/icon.png';

export default class CellDemo extends React.Component {

    render() {
        return (
            <Page className="cell" title="Cell">
                <CellsTitle>带说明的列表项</CellsTitle>
                <Cells>
                    <Cell>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                </Cells>

                <CellsTitle>带图标、说明的列表项</CellsTitle>
                <Cells>
                    <Cell>
                        <CellHeader>
                            <img src={Icon} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={Icon} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                </Cells>

                <CellsTitle>带说明、跳转的列表项</CellsTitle>
                <Cells access>
                    <Cell href="javascript:;">
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                </Cells>

                <CellsTitle>带图标、说明、跳转的列表项</CellsTitle>
                <Cells access>
                    <Cell href="javascript:;">
                        <CellHeader>
                            <img src={Icon} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={Icon} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                </Cells>

                <ButtonArea>
                    <Button>确定</Button>
                    <Button type="default">取消</Button>
                </ButtonArea>
            </Page>
        );
    }
};