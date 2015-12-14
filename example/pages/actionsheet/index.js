/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import {Button, ActionSheet} from '../../../src/index';
import Page from '../../component/page';

export default class ActionSheetDemo extends React.Component {

    state = {
        menus: [{
            label: '拍照',
            onClick: ()=> {

            }
        }, {
            label: '从手机相册选择',
            onClick: ()=> {

            }
        }],
        actions: [
            {
                label: '取消',
                onClick: this.hide.bind(this)
            }
        ]
    };

    show() {
        this.refs.actionSheet.show();
    }

    hide() {
        this.refs.actionSheet.hide();
    }

    render() {
        return (
            <Page className="actionsheet" title="ActionSheet" spacing>
                <Button onClick={this.show.bind(this)}>ActionSheet</Button>
                <ActionSheet ref="actionSheet" menus={this.state.menus} actions={this.state.actions}/>
            </Page>
        );
    }
};