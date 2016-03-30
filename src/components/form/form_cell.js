/**
 * Created by yjcxy12 on 16/1/22.
 */



import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class FormCell extends React.Component {
    static propTypes = {
        vcode: PropTypes.bool,
        warn: PropTypes.bool,
        radio: PropTypes.bool,
        checkbox: PropTypes.bool,
        select: PropTypes.bool,
        selectPos: PropTypes.string,
    };

    static defaultProps = {
        vcode: false,
        warn: false,
        radio: false,
        checkbox: false,
        select: false,
        selectPos: undefined
    };

    render() {
        const { className, children, ...others } = this.props;
        const cls = classNames({
            weui_cell: true,
            weui_vcode: this.props.vcode,
            weui_cell_warn: this.props.warn,
            weui_cell_switch: this.props.switch,
            weui_cell_select: this.props.select,
            weui_select_before: this.props.selectPos == 'before',
            weui_select_after: this.props.selectPos == 'after',
            weui_check_label: this.props.radio || this.props.checkbox,
            [className]: className
        });

        if(this.props.radio || this.props.checkbox) {
            return (
                <label className={cls} {...others}>{children}</label>
            )
        }else{
            return (
                <div className={cls} {...others}>{children}</div>
            );
        }
    }
};
