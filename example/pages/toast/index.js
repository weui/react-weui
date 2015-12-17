/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import {Button, Toast} from '../../../src/index';
import Page from '../../component/page';

export default class ToastDemo extends React.Component {

    state = {
        show: false,
        timer: null
    };

    handleClick() {
        this.setState({show: true});

        this.state.timer = setTimeout(()=> {
            this.setState({show: false});
        }, 2000);
    }

    componentWillUnmount() {
        this.state.timer && clearTimeout(this.state.timer);
    }

    render() {
        return (
            <Page className="toast" title="Toast" spacing>
                <Button onClick={this.handleClick.bind(this)}>Toast</Button>
                <Toast show={this.state.show}>完成</Toast>
            </Page>
        );
    }
};