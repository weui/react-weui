/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import {Button, Progress} from '../../../src/index';
import Page from '../../component/page';

export default class ProgressDemo extends React.Component {

    state = {
        value: 0,
        timer: null,
        isUploading: false
    };

    start() {
        if (this.state.isUploading) {
            return;
        }

        this.state.isUploading = true;
        this.upload();
    }

    pause() {
        this.setState({isUploading: false});
    }

    upload() {
        if (!this.state.isUploading) {
            return;
        }
        this.setState({value: ++this.state.value % 100});
        this.state.toastTimer = setTimeout(this.upload.bind(this), 20);
    }

    componentWillUnmount () {
        this.state.toastTimer && clearInterval(this.state.toastTimer);
    }

    render() {
        return (
            <Page className="progress" title="Progress" spacing>
                <Progress value={this.state.value} onClick={this.pause.bind(this)} />
                <br/>
                <Button onClick={this.start.bind(this)} disabled={this.state.isUploading}>上传</Button>
            </Page>
        );
    }
};