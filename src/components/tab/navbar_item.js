import React from 'react';
import classNames from 'classnames';

/**
 *  Navbar item to display info
 *
 */
export default class NavBarItem extends React.Component {
    static propTypes = {
        /**
         * indicate tab is active
         *
         */
        active: React.PropTypes.bool,
        /**
         * label of the item
         *
         */
        label: React.PropTypes.string
    };

    static defaultProps = {
      active: false,
    };

    render() {

        const {children, className, active, label, ...others} = this.props;
        const cls = classNames({
            'weui-navbar__item': true,
            'weui-bar__item_on': active
        }, className);

        return (
            <div className={cls} {...others}>
                {label ? label : children}
            </div>
        );
    }
}