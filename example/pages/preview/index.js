import React from 'react';
import Page from '../../component/page';
import { Preview, PreviewHeader, PreviewFooter, PreviewBody, PreviewItem, PreviewButton } from '../../../src/index';


const PreviewDemo = (props) => (
    <Page className="preview" title="Preview" subTitle="表单预览">
        <Preview>
            <PreviewHeader>
                <PreviewItem label="Total" value="$49.99" />
            </PreviewHeader>
            <PreviewBody>
                <PreviewItem label="Product" value="Name" />
                <PreviewItem label="Description" value="Product Description" />
                <PreviewItem label="Details" value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. " />
            </PreviewBody>
            <PreviewFooter>
                <PreviewButton primary>Action</PreviewButton>
            </PreviewFooter>
        </Preview>
        <br/>
        <Preview>
            <PreviewHeader>
                <PreviewItem label="Total" value="$49.99" />
            </PreviewHeader>
            <PreviewBody>
                <PreviewItem label="Product" value="Name" />
                <PreviewItem label="Description" value="Product Description" />
                <PreviewItem label="Details" value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. " />
            </PreviewBody>
            <PreviewFooter>
                <PreviewButton >Action</PreviewButton>
                <PreviewButton primary>Action</PreviewButton>
            </PreviewFooter>
        </Preview>
    </Page>
);

export default PreviewDemo;