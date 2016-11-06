import React from 'react';
import Page from '../../component/page';
import { Gallery, GalleryDelete } from '../../../src/index';


const GalleryDemo = (props) => (
    <Page className="cell" title="Gallery" subTitle="画廊，可实现上传图片的展示或幻灯片播放">
        <Gallery src="https://weui.io/images/pic_article.png" show>
            <GalleryDelete onClick={ e=> alert('click deleted') } />
        </Gallery>
    </Page>
);

export default GalleryDemo;