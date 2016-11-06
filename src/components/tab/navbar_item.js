/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class NavBarItem extends React.Component {
    static propTypes = {
      active: React.PropTypes.bool,
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