/**
 * Created by Tom on 16/1/24
 */


"use strict";

import React from 'react';
import {ButtonArea, Button, Cells, CellsTitle, Icon, CellsTips, Cell, CellHeader, CellBody, CellFooter, Form, FormCell, Input, Label} from '../../../src/index';
import Page from '../../component/page';


export default class RegisterDemo extends React.Component {
    render() {
        return (
            <Page className="icons" title="轻课计划-注册" spacing>
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
                            <Input type="password" name="password1"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>验证</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="password" name="password2" placeholder="重复输入密码"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>班级</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" placeholder=""/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>电话</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" placeholder=""/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>微信</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" placeholder=""/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>头像</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="file" placeholder=""/>
                        </CellBody>
                    </FormCell>

                    <FormCell>
                        <CellHeader>
                            <Label>地址</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" placeholder=""/>
                        </CellBody>
                    </FormCell>

                </Form>

                <ButtonArea>
                    <Button>确定</Button>
                    <Button type="default" href="#/">取消</Button>
                </ButtonArea>
            </Page>
        );
    }
};


