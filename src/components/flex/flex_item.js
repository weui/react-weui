//1.0.0 components

import React from 'react';

const FlexItem = (props) => (
    <props.component className="weui-flex__item" {...props}>
        { props.children }
    </props.component>
)

FlexItem.defaultProps = {
    component: 'div'
}

export default FlexItem;