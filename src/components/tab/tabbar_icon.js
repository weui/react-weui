/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class TabBarIcon extends React.Component {

    render() {

        const {children, className, ...others} = this.props;
        const cls = classNames({
            weui_tabbar_icon: true,
        }, className);

        return (
            <div className={cls} {...others}>
                {children}
            </div>
        );
    }
}