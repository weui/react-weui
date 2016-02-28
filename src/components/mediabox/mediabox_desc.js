/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class MediaBoxDescription extends React.Component {
    render() {
        const {children, ...others} = this.props;
        const className = classNames({
            weui_media_desc: true
        });

        return (
            <p className={className} {...others}>{children}</p>
        );
    }
};