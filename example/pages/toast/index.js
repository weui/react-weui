/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import {Button, Toast} from '../../../src/index';
import Page from '../../component/page';

export default class ToastDemo extends React.Component {

    state = {
        showToast: false,
        showLoading: false,
        toastTimer: null,
        loadingTimer: null
    };

    componentWillUnmount() {
        this.state.toastTimer && clearTimeout(this.state.toastTimer);
        this.state.loadingTimer && clearTimeout(this.state.loadingTimer);
    }

    render() {
        return (
            <Page className="toast" title="Toast" spacing>
                <Button onClick={this.showToast.bind(this)}>Toast</Button>
                <Button onClick={this.showLoading.bind(this)}>Loading</Button>
                <Toast show={this.state.showToast}>完成</Toast>
                <Toast icon="loading" show={this.state.showLoading}>正在加载中...</Toast>
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