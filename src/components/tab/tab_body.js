/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class TabBody extends React.Component {

    render() {

        const {children, className, ...others} = this.props;
        const cls = classNames({
            'weui-tab__panel': true
        }, className);

        return (
            <div className={cls} {...others}>
                {children}
            </div>
        );
    }
}