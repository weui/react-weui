import React from 'react';
import classNames from 'classnames';

const CellBody = (props) => {
    const { className, children, primary, ...others } = props;
    const cls = classNames({
        'weui-cell__bd': true,
        'weui-cell_primary': primary,
        [className]: className
    });

    return (
        <div className={cls} {...others}>{ children }</div>
    );
};

export default CellBody;