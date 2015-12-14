/**
 * Created by jf on 15/12/3.
 */



import React from 'react';
import classNames from 'classnames';

export default class CellsTips extends React.Component {
    render() {
        const {children, ...others} = this.props;
        const className = classNames({
            weui_cells_tips: true
        });

        return (
            <div className={className} {...others}>{children}</div>
        );
    }
};