/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import {Cells, Cell, CellHeader, CellBody, CellFooter} from '../../../src/index';
import Page from '../../component/page';
import IconButton from './images/icon_nav_button.png';
import IconCell from './images/icon_nav_cell.png';
import IconToast from './images/icon_nav_toast.png';
import IconDialog from './images/icon_nav_dialog.png';
import IconProgress from './images/icon_nav_button.png';
import IconMsg from './images/icon_nav_msg.png';
import IconArticle from './images/icon_nav_article.png';
import IconActionSheet from './images/icon_nav_actionSheet.png';
import IconIcons from './images/icon_nav_icons.png';

import './index.less';

export default class Home extends React.Component {

    state = {
        components: [{
            icon: IconButton,
            label: 'Button',
            url: '#button'
        }, {
            icon: IconCell,
            label: 'Cell',
            url: '#cell'
        }, {
            icon: IconToast,
            label: 'Toast',
            url: '#toast'
        }, {
            icon: IconDialog,
            label: 'Dialog',
            url: '#dialog'
        }, {
            icon: IconProgress,
            label: 'Progress',
            url: '#progress'
        }, {
            icon: IconMsg,
            label: 'Msg',
            url: '#msg'
        }, {
            icon: IconArticle,
            label: 'Article',
            url: '#article'
        }, {
            icon: IconActionSheet,
            label: 'ActionSheet',
            url: '#actionsheet'
        }, {
            icon: IconIcons,
            label: 'Icons',
            url: '#icons'
        }]
    };

    _renderItem() {
        return this.state.components.map((component, index) => {
            return (
                <Cell key={index} className="global_navs" href={component.url} >
                    <CellHeader>
                        <img className="icon_nav" src={component.icon} alt=""/>
                    </CellHeader>
                    <CellBody>{component.label}</CellBody>
                    <CellFooter/>
                </Cell>
            );
        });
    }

    render() {
        return (
            <Page className="home" title="WeUI" subTitle="为微信Web服务量身设计">
                <Cells access>
                    {
                        this._renderItem()
                    }
                </Cells>
            </Page>
        );
    }
};