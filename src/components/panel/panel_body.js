import React from 'react';
import classNames from 'classnames';

export default class PanelBody extends React.Component {
    render() {
        const {children, ...others} = this.props;
        const className = classNames({
            'weui-panel__bd': true,
            [className]: className
        });

        return (
            <div className={className} {...others}>{children}</div>
        );
    }
};