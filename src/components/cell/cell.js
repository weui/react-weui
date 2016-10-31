import React from 'react';
import classNames from 'classnames';

const Cell = (props) => {
    const { className, children, access, href, component, htmlFor, ...others } = props;
    const DefaultComponent = href ? 'a' : htmlFor ? 'label' : 'div';
    var CellComponent = component ? component : DefaultComponent;

    const cls = classNames({
        'weui-cell': true,
        'weui-cell_access': access,
        [className]: className
    });

    return (
        <CellComponent
            className={cls}
            href={href}
            htmlFor={htmlFor}
            { ...others }
        >
            { children }
        </CellComponent>
    );
};

export default Cell;