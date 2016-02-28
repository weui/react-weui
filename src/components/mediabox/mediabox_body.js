/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class PanelBody extends React.Component {
    render() {
        const {children, ...others} = this.props;
        const className = classNames({
            weui_media_bd: true
        });

        return (
            <div className={className} {...others}>{children}</div>
        );
    }
};