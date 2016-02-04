/**
 * Created by yjcxy12 on 16/1/22.
 */



import React, { Component } from 'react';
import classNames from 'classnames';

export default class Form extends Component {
    render() {
        const { children, className, ...others } = this.props;
        const cls = classNames({
            weui_cells: true,
            weui_cells_form: true,
            [className]: className
        });

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
};
