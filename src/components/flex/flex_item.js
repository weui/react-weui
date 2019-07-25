//1.0.0 components

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Evenly distribute flex items
 *
 */
const FlexItem = (props) => {
    const { component, children, ...others } = props;
    return React.createElement(
        component,
        {
            className: 'weui-flex__item',
            ...others
        },
        children
    );
};

FlexItem.propTypes = {
    /**
     * pass component to replace the component but maintaing style
     *
     */
    component: PropTypes.node
};

FlexItem.defaultProps = {
    component: 'div'
};

export default FlexItem;
