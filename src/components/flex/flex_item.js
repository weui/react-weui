//1.0.0 components

import React from 'react';

/**
 * Evenly distribute flex items
 *
 */
const FlexItem = (props) => (
    <props.component className="weui-flex__item" {...props}>
        { props.children }
    </props.component>
)

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