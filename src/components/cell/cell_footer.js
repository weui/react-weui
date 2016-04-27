/**
 * Created by jf on 15/11/12.
 */



import React from 'react';
import classNames from 'classnames';

export default class CellFooter extends React.Component {
    render() {
        const {className, children, ...others} = this.props;
        const cls = classNames({
            weui_cell_ft: true,
            [className]: className
        });

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
};