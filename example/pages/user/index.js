"use strict";

import React from 'react';
import {ButtonArea, Button, Cells, CellsTitle, Icon, CellsTips, Cell, CellHeader, CellBody, CellFooter, Form, FormCell, Input, Label} from '../../../src/index';
import Page from '../../component/page';
import userDemoSrc from './images/user-demo.png'

export default class UserDemo extends React.Component {
     render() {
         return (
             <Page className="icons" title="轻课计划-用户信息" spacing>
                <img src={userDemoSrc}/>

                <Button href="#/">返回</Button>
            </Page>
         )
    }
};
