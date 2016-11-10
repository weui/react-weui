import React from 'react';
import {
    Flex,
    FlexItem
} from '../../../src/index';
import Page from '../../component/page';


const FlexDemo = (props) => (
    <Page className="flex" title="Flex" subTitle="Flex布局" spacing>
        <Flex>
            <FlexItem>
                <div className="placeholder">weui</div>
            </FlexItem>
        </Flex>
        <Flex>
            <FlexItem>
                <div className="placeholder">weui</div>
            </FlexItem>
            <FlexItem>
                <div className="placeholder">weui</div>
            </FlexItem>
        </Flex>
        <Flex>
            <FlexItem>
                <div className="placeholder">weui</div>
            </FlexItem>
            <FlexItem>
                <div className="placeholder">weui</div>
            </FlexItem>
            <FlexItem>
                <div className="placeholder">weui</div>
            </FlexItem>
        </Flex>
        <Flex>
            <FlexItem>
                <div className="placeholder">weui</div>
            </FlexItem>
            <FlexItem>
                <div className="placeholder">weui</div>
            </FlexItem>
            <FlexItem>
                <div className="placeholder">weui</div>
            </FlexItem>
            <FlexItem>
                <div className="placeholder">weui</div>
            </FlexItem>
        </Flex>
    </Page>
);

export default FlexDemo;