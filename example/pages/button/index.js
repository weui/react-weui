/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import {Button} from '../../../src/index';
import Page from '../../component/page';
import './button.less';

export default class ButtonDemo extends React.Component {

    render() {
        return (
            <Page className="button" title="Button" spacing>
                <Button>按钮</Button>
                <Button disabled>按钮</Button>

                <Button type="warn">按钮</Button>
                <Button type="warn" disabled>按钮</Button>

                <Button type="default">按钮</Button>
                <Button type="default" disabled>按钮</Button>

                <div className="button_sp_area">
                    <Button type="primary" plain>按钮</Button>
                    <Button type="default" plain>按钮</Button>

                    <Button size="small">按钮</Button>
                    <Button type="default" size="small">按钮</Button>
                </div>
            </Page>
        );
    }
};