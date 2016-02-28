/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class PanelHeader extends React.Component {
    render() {
        const {children, ...others} = this.props;
        const className = classNames({
            weui_panel_hd: true
        });

        return (
            <div className={className} {...others}>{children}</div>
        );
    }
};