/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import {Flex, FlexItem, Cells, Cell, CellBody, CellFooter} from '../../../src/index';
import { Link } from 'react-router';
import Page from '../../component/page';
import Category from './category';

import Logo from './images/logo.png';
import IconForm from './images/icon_nav_form.png';
import IconButton from './images/icon_nav_button.png';
import IconCell from './images/icon_nav_cell.png';
import IconToast from './images/icon_nav_toast.png';
import IconDialog from './images/icon_nav_dialog.png';
import IconProgress from './images/icon_nav_progress.png';
import IconMsg from './images/icon_nav_msg.png';
import IconArticle from './images/icon_nav_article.png';
import IconActionSheet from './images/icon_nav_actionSheet.png';
import IconIcons from './images/icon_nav_icons.png';
import IconPanel from './images/icon_nav_panel.png';
import IconTab from './images/icon_nav_tab.png';
import IconSearchBar from './images/icon_nav_search_bar.png';

import './index.less';

export default class Home extends React.Component {
    render() {
        return (
            <Page
                className="home"
                title={<img src={Logo} alt="weui" height="21px" />}
                subTitle="A UI library by WeChat official design team, includes the most useful widgets/modules in mobile web applications."
                spacing
            >
                <ul>
                    <li>
                        <Category
                            header={
                                <Flex>
                                    <FlexItem component="p">
                                        Form
                                    </FlexItem>
                                    <img src={IconForm} alt="weui form" />
                                </Flex>
                            }
                        >
                            <Cells>
                                <Cell component={Link} to="/button" access>
                                    <CellBody>
                                        Button
                                    </CellBody>
                                    <CellFooter/>
                                </Cell>
                            </Cells>
                        </Category>
                    </li>
                </ul>
            </Page>
        );
    }
};