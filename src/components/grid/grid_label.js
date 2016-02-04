/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class GridLabel extends React.Component {
    render() {
        const {children, className, ...others} = this.props;
        const cls = classNames({
            weui_grid_label: true
        }, className);

        return (
            <p className={cls} {...others}>{children}</p>
        );
    }
};