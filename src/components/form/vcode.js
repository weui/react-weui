import React from 'react';
import classNames from 'classnames';

const VCode = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-vcode-img': true,
        [className]: className
    });

    return (
        <div>
            <img className={cls} {...others}/>
        </div>
    );
};

export default VCode
