import React from 'react';
import classNames from 'classnames';

/**
 * Header of Panel
 *
 */
export default class PanelHeader extends React.Component {
    render() {
        const {children, ...others} = this.props;
        const className = classNames({
            'weui-panel__hd': true,
            [className]: className
        });

        return (
            <div className={className} {...others}>{children}</div>
        );
    }
};