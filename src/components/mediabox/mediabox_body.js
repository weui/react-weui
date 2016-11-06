/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class PanelBody extends React.Component {
    render() {
        const {children, className, ...others} = this.props;
        const cls = classNames({
            'weui-media-box__bd': true
        }, className);

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
};