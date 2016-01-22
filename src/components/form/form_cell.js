/**
 * Created by yjcxy12 on 16/1/22.
 */



import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class FormCell extends React.Component {
    static propTypes = {
        vcode: PropTypes.bool,
        warn: PropTypes.bool
    };

    static defaultProps = {
        vcode: false,
        warn: false
    };

    render() {
        const { className, children, vcode, warn, ...others } = this.props;
        const cls = classNames({
            weui_cell: true,
            weui_vcode: vcode,
            weui_cell_warn: warn,
            [className]: className
        });

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
};
