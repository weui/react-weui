import React from 'react';
import classNames from 'classnames';
import TabBarIcon from './tabbar_icon';
import TabBarLabel from './tabbar_label';

/**
 *  Tabbar item
 *
 */
export default class TabBarItem extends React.Component {
    static propTypes = {
        /**
         * indicate currently active
         *
         */
        active: React.PropTypes.bool,
        /**
         * icon of item
         *
         */
        icon: React.PropTypes.any,
        /**
         * label of item
         *
         */
        label: React.PropTypes.string
    };

    static defaultProps = {
      active: false,
      icon: false,
      label: ''
    };

    render() {

        const {children, className, active, icon, label, ...others} = this.props;
        const cls = classNames({
            'weui-tabbar__item': true,
            'weui-bar__item_on': active
        }, className);

        if (icon || label){
            return (
                <div className={cls} {...others}>
                    {icon ? <TabBarIcon>{icon}</TabBarIcon> : false}
                    {label ? <TabBarLabel>{label}</TabBarLabel> : false}
                </div>
            );
        } else {
            return (
                <div className={cls} {...others}>
                    {children}
                </div>
            );
        }
    }
}