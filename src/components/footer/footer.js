import React from 'react';
import classNames from 'classnames';

const Footer = (props) => {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-footer': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};

export default Footer
