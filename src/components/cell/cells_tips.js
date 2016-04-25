/**
 * Created by jf on 15/12/3.
 */



import React from 'react';
import classNames from 'classnames';

export default class CellsTips extends React.Component {
    render() {
        const {className, children, ...others} = this.props;
        const cls = classNames({
            weui_cells_tips: true,
            [className]: className
        });

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
};