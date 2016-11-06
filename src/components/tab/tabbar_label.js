/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class TabBarLabel extends React.Component {

    render() {

        const {children, className, ...others} = this.props;
        const cls = classNames({
            'weui-tabbar__label': true,
        }, className);

        return (
            <p className={cls} {...others}>
                {children}
            </p>
        );
    }
}