//1.0.0 components

import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Preview Item for all purpose usage
 *
 */
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

PreviewItem.propTypes = {
    /**
     * The label of item
     *
     */
    label: PropTypes.string,
    /**
     * Value of the label
     *
     */
    value: PropTypes.string,

}

PreviewItem.defaultProps = {
    label: false,
    value: false,
}

export default PreviewItem