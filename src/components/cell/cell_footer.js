import React from 'react';
import classNames from 'classnames';

const CellFooter = (props) => {
    const { className, children, primary, ...others } = props;
    const cls = classNames({
        'weui-cell__ft': true,
        'weui-cell_primary': primary,
        [className]: className
    });

    return (
        <div className={ cls } { ...others }>{ children }</div>
    );
};

export default CellFooter