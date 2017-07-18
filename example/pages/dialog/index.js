import React from 'react';
import { Button, Dialog } from '../../../build/packages';
import Page from '../../component/page';

export default class DialogDemo extends React.Component {
    state = {
        showIOS1: false,
        showIOS2: false,
        showAndroid1: false,
        showAndroid2: false,
        style1: {
            buttons: [
                {
                    label: 'Ok',
                    onClick: this.hideDialog.bind(this)
                }
            ]
        },
        style2: {
            title: 'Heading',
            buttons: [
                {
                    type: 'default',
                    label: 'Cancel',
                    onClick: this.hideDialog.bind(this)
                },
                {
                    type: 'primary',
                    label: 'Ok',
                    onClick: this.hideDialog.bind(this)
                }
            ]
        }
    };

    hideDialog() {
        this.setState({
            showIOS1: false,
            showIOS2: false,
            showAndroid1: false,
            showAndroid2: false,
        });
    }

    render() {
        return (
            <Page className="dialog" title="Dialog" subTitle="对话框" spacing>
                <Button type="default" onClick={ e=> this.setState({ showIOS1: true}) } >iOS Style1</Button>
                <Button type="default" onClick={ e=> this.setState({ showIOS2: true}) }>iOS Style2</Button>
                <Button type="default" onClick={ e=> this.setState({ showAndroid1: true}) } >Android Style1</Button>
                <Button type="default" onClick={ e=> this.setState({ showAndroid2: true}) }>Android Style2</Button>

                <Dialog type="ios" title={this.state.style1.title} buttons={this.state.style1.buttons} show={this.state.showIOS1}>
                    This is iOS Style 1
                </Dialog>
                <Dialog type="ios" title={this.state.style2.title} buttons={this.state.style2.buttons} show={this.state.showIOS2}>
                    This is iOS Style 2
                </Dialog>

                <Dialog type="android" title={this.state.style1.title} buttons={this.state.style1.buttons} show={this.state.showAndroid1}>
                    This is Android Style 1
                </Dialog>
                <Dialog type="android" title={this.state.style2.title} buttons={this.state.style2.buttons} show={this.state.showAndroid2}>
                    This is Android Style 2
                </Dialog>
            </Page>
        );
    }
};