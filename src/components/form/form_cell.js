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
        const { className, children, ...others } = this.props;
        const cls = classNames({
            weui_cell: true,
            weui_vcode: this.props.vcode,
            weui_cell_warn: this.props.warn,
            weui_cell_switch: this.props.switch,
            [className]: className
        });

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
};
