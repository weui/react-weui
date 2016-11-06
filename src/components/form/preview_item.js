//1.0.0 components

import React from 'react';
import classNames from 'classnames';

const PreviewItem = (props) => {

    const { className, label, value, ...others } = props;
    const cls = classNames({
        'weui-form-preview__item': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            <label className="weui-form-preview__label">{label}</label>
            <em className="weui-form-preview__value">{value}</em>
        </div>
    )
}

export default PreviewItem