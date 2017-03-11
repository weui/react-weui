import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Mask from '../mask/index';
import Icon from '../icon/index';

/**
 *  pop out indicator to inform users
 *
 */
class Toast extends Component {
    static propTypes = {
        /**
         * Icon Value
         *
         */
        icon: PropTypes.string,
        /**
         * Icon Size
         *
         */
        iconSize: PropTypes.string,
        /**
         * display toast
         *
         */
        show: PropTypes.bool
    };

    static defaultProps = {
        icon: 'toast',
        show: false,
    };

    render() {
        const {className, icon, show, children, iconSize, ...others} = this.props;
        const cls = classNames('weui-toast', {
            [className]: className
        });
        return (
            <div style={{display: show ? 'block' : 'none'}}>
                <Mask transparent={true}/>
                <div className={cls} {...others}>
                    <Icon value={icon} size={iconSize} className="weui-icon_toast"/>
                    <p className="weui-toast_content">{children}</p>
                </div>
            </div>
        );
    }
}

export default Toast;