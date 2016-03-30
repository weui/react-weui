/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';
import MediaBoxInfoMeta from './mediabox_info_meta';

export default class MediaBoxInfo extends React.Component {
    static propTypes = {
        data: React.PropTypes.array,
    };

    static defaultProps = {
        data: [],
    };

    renderData(metas) {
        return metas.map((meta,i) => {
            return <MediaBoxInfoMeta key={i} extra={meta.extra}>{meta.label}</MediaBoxInfoMeta>;
        });
    }

    render() {
        const {children, data, className, ...others} = this.props;
        const cls = classNames({
            weui_media_info: true
        }, className);

        return (
            <ul className={cls} {...others}>
                {data.length > 0 ? this.renderData(data) : children}
            </ul>
        );
    }
};