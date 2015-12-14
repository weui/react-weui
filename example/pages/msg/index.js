/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import {Button, Msg} from '../../../src/index';
import Page from '../../component/page';

export default class MsgDemo extends React.Component {

    state = {
        buttons: [{
            type: 'primary',
            label: '确定',
            onClick: ()=>{

            }
        }, {
            type: 'default',
            label: '取消',
            onClick: ()=>{

            }
        }]
    };

    render() {
        return (
            <Page className="msg" title="Msg" spacing>
                <Msg type="success" title="提交成功" description="你的反馈我们已经收到" buttons={this.state.buttons} />
            </Page>
        );
    }
};