import React from 'react';
import classNames from 'classnames';

const Checkbox = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-check': true,
        [className]: className
    });

    return (
        <div>
            <input className={cls} type="checkbox" {...others}/>
            <span className="weui-icon-checked"></span>
        </div>
    );
};

export default Checkbox
