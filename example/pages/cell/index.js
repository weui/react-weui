/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import { ButtonArea,
    Button,
    Cells,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Icon,
    Input,
    Label
} from '../../../src/index';
import Page from '../../component/page';
import iconSrc from './images/icon.png';
import vcodeSrc from './images/vcode.jpg';

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
                            <img src={iconSrc} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
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
                            <img src={iconSrc} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
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
                            <img src={iconSrc} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
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
                            <img src={iconSrc} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                </Cells>

                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>qq</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="请输入qq号"/>
                        </CellBody>
                    </FormCell>
                    <FormCell vcode={true}>
                        <CellHeader>
                            <Label>验证码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="number" placeholder="请输入验证码"/>
                        </CellBody>
                        <CellFooter>
                            <img src={vcodeSrc} />
                        </CellFooter>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>银行卡</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="number" placeholder="请输入银行卡号"/>
                        </CellBody>
                    </FormCell>
                    <FormCell vcode={true} warn={true}>
                        <CellHeader>
                            <Label>验证码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="number" placeholder="请输入验证码"/>
                        </CellBody>
                        <CellFooter>
                            <Icon value="warn" />
                            <img src={vcodeSrc} />
                        </CellFooter>
                    </FormCell>
                </Form>

                <ButtonArea>
                    <Button>确定</Button>
                    <Button type="default">取消</Button>
                </ButtonArea>
            </Page>
        );
    }
};