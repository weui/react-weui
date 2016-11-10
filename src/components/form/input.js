import React from 'react';
import classNames from 'classnames';

/**
 * WeUI Input wrapper for `input`
 *
 */
const Input = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-input': true,
        [className]: className
    });

    return (
        <div>
            <input className={cls} {...others}/>
            <span className="weui-icon-checked"></span>
        </div>
    );
};

Input.propTypes = {
    defaultValue: React.PropTypes.string
}

Input.defaultProps = {
    defaultValue: undefined
}

export default Input
