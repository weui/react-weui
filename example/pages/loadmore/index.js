import React from 'react';
import { LoadMore } from '../../../src/index';
import Page from '../../component/page';

const LoadMoreDemo = (props) => {

    return (
        <Page className="loadmore" title="Loadmore" subTitle="加载更多" spacing>
           <LoadMore loading>Loading</LoadMore>
           <LoadMore showLine>No Data</LoadMore>
           <LoadMore showLine showDot />
        </Page>
    );
};

export default LoadMoreDemo