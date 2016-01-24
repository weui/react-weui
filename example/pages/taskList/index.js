"use strict";

import React from 'react';
import {ButtonArea, Button, Cells, CellsTitle, Icon, CellsTips, Cell, CellHeader, CellBody, CellFooter, Form, FormCell, Input, Label} from '../../../src/index';
import Page from '../../component/page';
import taskListSrc from './images/taskList-demo.png';

export default class UserDemo extends React.Component {
    render() {
        return (
            <Page className="icons" title="轻课计划-任务列表" spacing>
                <img src={taskListSrc}/>

                <Button href="#/">返回</Button>
            </Page>
        )
    }
};
