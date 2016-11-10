import React from 'react';
import Page from '../../component/page';
import { Gallery, GalleryDelete } from '../../../src/index';
import imgSrc from '../uploader/photo.png';


const GalleryDemo = (props) => (
    <Page className="cell" title="Gallery" subTitle="画廊，可实现上传图片的展示或幻灯片播放">
        <Gallery src={imgSrc} show>
            <GalleryDelete onClick={ e=> alert('click deleted') } />
        </Gallery>
    </Page>
);

export default GalleryDemo;