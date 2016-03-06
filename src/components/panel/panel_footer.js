/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class PanelFooter extends React.Component {
    render() {
        const {children, ...others} = this.props;
        const Component = this.props.href ? 'a' : 'div';
        const className = classNames({
            weui_panel_ft: true
        });

        return (
            <Component className={className} {...others}>{children}</Component>
        );
    }
};