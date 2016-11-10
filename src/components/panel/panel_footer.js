import React from 'react';
import classNames from 'classnames';

/**
 * Footer of Panel
 *
 */
export default class PanelFooter extends React.Component {
    render() {
        const {children, ...others} = this.props;
        const Component = this.props.href ? 'a' : 'div';
        const className = classNames({
            'weui-panel__ft': true,
            [className]: className
        });

        return (
            <Component className={className} {...others}>{children}</Component>
        );
    }
};