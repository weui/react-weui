import React from 'react';
import {Button, ButtonArea} from '../../../build/packages';
import Page from '../../component/page';
import './button.less';

export default class ButtonDemo extends React.Component {

    render() {
        return (
            <Page className="button" title="Button" subTitle="按钮" spacing>
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>

                <ButtonArea>
                    <Button type="default">Secondary Normal</Button>
                    <Button type="default" disabled>Secondary Disabled</Button>
                </ButtonArea>

                <ButtonArea direction="horizontal">
                    <Button type="warn">Warn Normal</Button>
                    <Button type="warn" disabled>Disabled</Button>
                </ButtonArea>

                <div className="button-sp-area">
                    <Button type="primary" plain>Button</Button>
                    <Button type="primary" plain disabled>Button</Button>
                    <Button type="default" plain>Button</Button>
                    <Button size="small">Mini</Button>
                    <Button type="default" size="small">Mini</Button>
                    <Button type="warn" size="small">Mini</Button>
                </div>
            </Page>
        );
    }
};