import React from 'react';
import classNames from 'classnames';

const CellHeader = (props) => {
    const { className, children, primary, ...others } = props;
    const cls = classNames({
        'weui-cell__hd': true,
        'weui-cell_primary': primary,
        [className]: className
    });

    return (
        <div className={ cls } { ...others }>{ children }</div>
    );
};

export default CellHeader