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
        const {children, extra, className, ...others} = this.props;
        const cls = classNames({
            'weui-media-box__info__meta': true,
            'weui-media-box__info__meta_extra': extra
        }, className);

        return (
            <li className={cls} {...others}>{children}</li>
        );
    }
};