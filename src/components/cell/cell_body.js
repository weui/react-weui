/**
 * Created by jf on 15/11/12.
 */



import React from 'react';
import classNames from 'classnames';

export default class CellBody extends React.Component {
    render() {
        const {children, ...others} = this.props;
        const className = classNames({
            weui_cell_bd: true,
            weui_cell_primary: true
        });

        return (
            <div className={className} {...others}>{children}</div>
        );
    }
};