import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Content of `Cell`
 *
 */
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

CellBody.propTypes = {
    /**
     * if cell body is the primary block
     *
     */
    primary: PropTypes.bool,
}

CellBody.defaultProps = {
    primary: false,
}

export default CellBody;