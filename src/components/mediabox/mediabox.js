/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class MediaBox extends React.Component {
    static propTypes = {
        type: React.PropTypes.string
    };

    static defaultProps = {
        type: 'text'
    };

    render() {
        const {children, type, className, ...others} = this.props;
        const Component = this.props.href ? 'a' : 'div';
        const cls = classNames({
            'weui-media-box': true,
            'weui-media-box_appmsg': type === 'appmsg',
            'weui-media-box_text': type === 'text',
            'weui-media-box_small-appmsg': type === 'small_appmsg',
        }, className);

        return (
            <Component className={cls} {...others}>{children}</Component>
        );
    }
};