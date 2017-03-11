import React from 'react';
import classNames from 'classnames';

/**
 * weui switch style for checkbox
 *
 */
const Switch = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-switch': true,
        [className]: className
    });

    return (
        <div>
            <input className={cls} type="checkbox" {...others}/>
            <span className="weui-icon-checked"></span>
        </div>
    );
};

export default Switch;