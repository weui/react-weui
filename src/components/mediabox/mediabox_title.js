/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class MediaBoxTitle extends React.Component {
    render() {
        const {children, ...others} = this.props;
        const className = classNames({
            weui_media_title: true
        });

        return (
            <h4 className={className} {...others}>{children}</h4>
        );
    }
};