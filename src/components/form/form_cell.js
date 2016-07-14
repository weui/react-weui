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
        switch: PropTypes.bool,
        select: PropTypes.bool,
        selectPos: PropTypes.string,
    };

    static defaultProps = {
        vcode: false,
        warn: false,
        radio: false,
        checkbox: false,
        select: false,
        switch: false,
        selectPos: undefined
    };

    render() {
        const {
          className, children,
          radio, checkbox, vcode, warn,
          select, selectPos,
          ...others,
        } = this.props;
        const cellDomProps = Object.assign({}, others);
        delete cellDomProps.switch;
        const cls = classNames({
            weui_cell: true,
            weui_vcode: vcode,
            weui_cell_warn: warn,
            weui_cell_switch: this.props.switch,
            weui_cell_select: select,
            weui_select_before: selectPos == 'before',
            weui_select_after: selectPos == 'after',
            weui_check_label: radio || checkbox,
            [className]: className
        });

        if(radio || checkbox) {
            return (
                <label className={cls} {...cellDomProps}>{children}</label>
            )
        }else{
            return (
                <div className={cls} {...cellDomProps}>{children}</div>
            );
        }
    }
};
