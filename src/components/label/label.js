import React from 'react';
import classNames from 'classnames';

const Label = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-label': true,
        [className]: className
    });

    return (
        <div>
            <label className={cls} {...others}/>
        </div>
    );
};

export default Label
