import React from 'react';
import {Button, Toast} from '../../../src/index';
import Page from '../../component/page';

export default class ToastDemo extends React.Component {

    state = {
        showToast: false,
        showLoading: false,
        toastTimer: null,
        loadingTimer: null,
    };

    componentWillUnmount() {
        this.state.toastTimer && clearTimeout(this.state.toastTimer);
        this.state.loadingTimer && clearTimeout(this.state.loadingTimer);
    }

    render() {
        return (
            <Page className="toast" title="Toast" subTitle="弹出式提示" spacing>
                <Button onClick={this.showToast.bind(this)} type="default">Success Toast</Button>
                <Button onClick={this.showLoading.bind(this)} type="default">Loading Toast</Button>

                <Toast icon="success-no-circle" show={this.state.showToast}>Done</Toast>
                <Toast icon="loading" show={this.state.showLoading}>Loading...</Toast>
            </Page>
        );
    }

    showToast() {
        this.setState({showToast: true});

        this.state.toastTimer = setTimeout(()=> {
            this.setState({showToast: false});
        }, 2000);
    }

    showLoading() {
        this.setState({showLoading: true});

        this.state.loadingTimer = setTimeout(()=> {
            this.setState({showLoading: false});
        }, 2000);
    }

};