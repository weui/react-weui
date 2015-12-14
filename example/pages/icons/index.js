/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import {Icon} from '../../../src/index';
import Page from '../../component/page';
import './icons.less';

export default class IconDemo extends React.Component {

    render() {
        return (
            <Page className="icons" title="Icons" spacing>

                <Icon size="large" value="success" />
                <Icon size="large" value="info" />
                <Icon size="large" value="warn" />
                <Icon size="large" value="waiting" />
                <Icon size="large" value="safe_success" />
                <Icon size="large" value="safe_warn" />

                <div className="icon_sp_area">
                    <Icon value="success" />
                    <Icon value="success_circle" />
                    <Icon value="success_no_circle" />
                    <Icon value="info" />
                    <Icon value="waiting" />
                    <Icon value="waiting_circle" />
                    <Icon value="circle" />
                    <Icon value="warn" />
                    <Icon value="download" />
                    <Icon value="info_circle" />
                    <Icon value="cancel" />
                </div>
            </Page>
        );
    }
};