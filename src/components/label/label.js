/**
 * Created by yjcxy12 on 16/1/22.
 */



import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Label extends React.Component {
    render() {
        const { className, children, ...others } = this.props;
        const cls = classNames({
            weui_label: true,
            [className]: className
        });

        return (
            <label className={cls} {...others}>{children}</label>
        );
    }
};
