/**
 * Created by jf on 15/11/13.
 */



import React from 'react';
import classNames from 'classnames';

export default class CellsTitle extends React.Component {
    render() {
        const {className, children, ...others} = this.props;
        const cls = classNames({
            weui_cells_title: true,
            [className]: className
        });

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
};