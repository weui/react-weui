/**
 * Created by Tom on 16/1/24
 */


"use strict";

import React from 'react';
import {ButtonArea, Button, Cells, CellsTitle, Icon, CellsTips, Cell, CellHeader, CellBody, CellFooter, Form, FormCell, Input, Label} from '../../../src/index';
import Page from '../../component/page';
import './login.less';
import vcodeSrc from './images/vcode.jpg';


export default class LoginDemo extends React.Component {
    render() {
        return (
            <Page className="icons" title="轻课计划" spacing>
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>账户</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" placeholder="学号/用户名"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>密码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="password" />
                        </CellBody>
                    </FormCell>
                </Form>

                <ButtonArea>
                    <Button>确定</Button>
                    <Button type="default" href="#/">取消</Button>
                </ButtonArea>

                <Cells access>
                    <Cell href="#register">
                        <CellBody>

                        </CellBody>
                        <CellFooter>
                            注册成为新用户
                        </CellFooter>
                    </Cell>
                </Cells>

            </Page>
        );
    }
};


