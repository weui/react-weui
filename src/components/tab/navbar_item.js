/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class NavBarItem extends React.Component {
    static propTypes = {
      active: React.PropTypes.bool,
    };

    static defaultProps = {
      active: false,
    };

    render() {

        const {children, className, active, ...others} = this.props;
        const cls = classNames({
            weui_navbar_item: true,
            weui_bar_item_on: active
        }, className);

        return (
            <div className={cls} {...others}>
                {children}
            </div>
        );
    }
}