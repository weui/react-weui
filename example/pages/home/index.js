import React from 'react';
import {Flex, FlexItem, Cells, Cell, CellBody, CellFooter} from '../../../src/index';
import { Link } from 'react-router-dom';
import Page from '../../component/page';
import Accordion from '../../component/accordion';

import Logo from './images/logo.png';
import IconForm from './images/icon_nav_form.png';
import IconFeedback from './images/icon_nav_feedback.png';
import IconLayout from './images/icon_nav_layout.png';
import IconNav from './images/icon_nav_nav.png';
import IconSearch from './images/icon_nav_search.png';
import IconZIndex from './images/icon_nav_z-index.png';

import './index.less';

const menus = [
    {
        name: 'View',
        icon: IconZIndex,
        items: [
            {
                label: 'Swiper',
                to: '/swiper'
            },
            {
                label: 'Page',
                to: '/page'
            }
        ]
    },
    {
        name: 'Form',
        icon: IconForm,
        items: [
            {
                label: 'Button',
                to: '/button'
            },
            {
                label: 'List',
                to: '/list'
            },
            {
                label: 'Input',
                to: '/input'
            },
            {
                label: 'Picker',
                to: '/picker'
            },
            {
                label: 'Slider',
                to: '/slider'
            },
            {
                label: 'Uploader',
                to: '/uploader'
            }
        ]
    },
    {
        name: 'Basic Components',
        icon: IconLayout,
        items: [
            {
                label: 'Article',
                to: '/article'
            },
            {
                label: 'Badge',
                to: '/badge'
            },
            {
                label: 'Flex',
                to: '/flex'
            },
            {
                label: 'Footer',
                to: '/footer'
            },
            {
                label: 'Gallery',
                to: '/gallery'
            },
            {
                label: 'Grid',
                to: '/grid'
            },
            {
                label: 'Icons',
                to: '/icons'
            },
            {
                label: 'Loadmore',
                to: '/loadmore'
            },
            {
                label: 'Panel',
                to: '/panel'
            },
            {
                label: 'Preview',
                to: '/preview'
            },
            {
                label: 'Progress',
                to: '/progress'
            }
        ]
    },
    {
        name: 'Feedbacks',
        icon: IconFeedback,
        items: [
            {
                label: 'Actionsheet',
                to: '/actionsheet'
            },
            {
                label: 'Dialog',
                to: '/dialog'
            },
            {
                label: 'Msg',
                to: '/msg'
            },
            {
                label: 'Toast',
                to: '/toast'
            },
            {
                label: 'Toptips',
                to: '/toptips'
            },
            {
                label: 'Popup',
                to: '/popup'
            },
            {
                label: 'Pull To Refresh',
                to: '/ptr'
            },
            {
                label: 'Infinite Loader',
                to: '/infinite'
            }
        ]
    },
    {
        name: 'Navigations',
        icon: IconNav,
        items: [
            {
                label: 'Navbar',
                to: '/navbar'
            },
            {
                label: 'Tabbar',
                to: '/tabbar'
            },
            {
                label: 'AutoNavbar',
                to: '/navbar2'
            },
            {
                label: 'AutoTabbar',
                to: '/tabbar2'
            }
        ]
    },
    {
        name: 'Search',
        icon: IconSearch,
        items: [
            {
                label: 'Search Bar',
                to: '/searchbar'
            }
        ]
    }
]

const Home = (props) => {
    return (
        <Page
            className="home"
            title={<img src={Logo} alt="weui" height="21px" />}
            subTitle="A UI library by WeChat official design team, includes the most useful widgets/modules in mobile web applications."
            spacing
        >
            <ul>
                {menus.map((menu, i)=>(
                    <li key={i}>
                        <Accordion
                            header={
                                <Flex>
                                    <FlexItem component="p">
                                        {menu.name}
                                    </FlexItem>
                                    <img src={menu.icon} alt/>
                                </Flex>
                            }
                        >
                            <Cells>
                                {menu.items.map((item, j)=>(
                                        <Cell key={j} component={Link} to={item.to} access>
                                            <CellBody>
                                                {item.label}
                                            </CellBody>
                                            <CellFooter/>
                                        </Cell>
                                    ))}
                            </Cells>
                        </Accordion>
                    </li>
                ))}
            </ul>
        </Page>
    );
};

export default Home;