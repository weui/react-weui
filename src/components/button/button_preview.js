import React from 'react';
import classNames from 'classnames';

const PreviewButton = (props) => {
    const { className, primary, children, ...others } = props;
    const cls = classNames({
        'weui-form-preview__btn': true,
        'weui-form-preview__btn_default' : !primary,
        'weui-form-preview__btn_primary' : primary,
        [className]: className
    });

    return (
        <a className={cls} {...others}>
            {children}
        </a>
    );
};

export default PreviewButton;

