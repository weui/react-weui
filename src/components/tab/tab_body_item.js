/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class TabBodyItem extends React.Component {
    static propTypes = {
      active: React.PropTypes.bool
    };

    static defaultProps = {
      active: false
    };

    render() {

        const {children, className, active, ...others} = this.props;
        const cls = classNames({
           weui_tab_bd_item: true
        }, className);

        return (
            <div className={cls} style={{display: active ? 'block' : 'none'}} {...others}>
                {children}
            </div>
        );
    }
}