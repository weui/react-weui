//1.0.0 components

import React from 'react';

/**
 * Evenly distribute flex items
 *
 */
const FlexItem = (props) => {
    const { component, children, ...others } = props;
    return (
        <component className="weui-flex__item" {...others}>
            { children }
        </component>
    )
}

FlexItem.propTypes = {
    /**
     * pass component to replace the component but maintaing style
     *
     */
    component: React.PropTypes.node
}

FlexItem.defaultProps = {
    component: 'div'
}

export default FlexItem;