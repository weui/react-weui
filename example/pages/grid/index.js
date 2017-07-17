import React from 'react';
import { Grids } from '../../../build/packages';
import Page from '../../component/page';
import iconSrc from './icon_tabbar.png';

const data = Array(9).fill({
    icon: <img src={iconSrc}/>,
    label: 'Grid',
    href: 'javascript:;'
})

const GridDemo = (props) => (
    <Page className="grid" title="Grid" subTitle="九宫格">
        <Grids data={data}/>
    </Page>
);

export default GridDemo;