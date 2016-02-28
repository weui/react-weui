/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class MediaBoxInfoMeta extends React.Component {
    static propTypes = {
        extra: React.PropTypes.bool,
    };

    static defaultProps = {
        extra: false,
    };

    render() {
        const {children, extra, ...others} = this.props;
        const className = classNames({
            weui_media_info_meta: true,
            weui_media_info_meta_extra: extra
        });

        return (
            <li className={className} {...others}>{children}</li>
        );
    }
};