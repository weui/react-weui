/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class MediaBox extends React.Component {
    static propTypes = {
        access: React.PropTypes.bool,
        type: React.PropTypes.string
    };

    static defaultProps = {
        access: false,
        type: 'text'
    };

    render() {
        const {children, type, ...others} = this.props;
        const Component = this.props.href ? 'a' : 'div';
        const className = classNames({
            weui_media_box: true,
            weui_media_appmsg: type === 'appmsg',
            weui_media_text: type === 'text',
            weui_media_small_appmsg: type === 'small_appmsg',
        });

        return (
            <Component className={className} {...others}>{children}</Component>
        );
    }
};