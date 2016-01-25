import React, { Component } from 'react';
import classNames from 'classnames';

export default class Cells extends Component {
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
