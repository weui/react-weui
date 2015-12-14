/**
 * Created by jf on 15/11/13.
 */



import React from 'react';
import classNames from 'classnames';

export default class CellsTitle extends React.Component {
    render() {
        const {children, ...others} = this.props;
        const className = classNames({
            weui_cells_title: true
        });

        return (
            <div className={className} {...others}>{children}</div>
        );
    }
};