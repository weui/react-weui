import React from 'react';
import classNames from 'classnames';

/**
 *  Button usage：OK(primary)、Cancel(default)、Warn(warn).
 *
 */
export default class Button extends React.Component {
    static propTypes = {
        disabled: React.PropTypes.bool,
        /**
         * Options: primary, default, warn, vcode
         *
         */
        type: React.PropTypes.string,
        /**
         * Options: normal, small
         *
         */
        size: React.PropTypes.string,
    };

    static defaultProps = {
        disabled: false,
        type: 'primary',
        size: 'normal',
    };

    render() {
        const { component, type, size, plain, className, children, ...others } = this.props;
        const Component = component ? component : this.props.href || type == 'vcode' ? 'a' : 'button';
        const cls = type == 'vcode' ? classNames('weui-vcode-btn', {[className]: className}) : classNames({
            'weui-btn': true,
            'weui-btn_mini': size === 'small',
            'weui-btn_primary': type === 'primary' && !plain,
            'weui-btn_default': type === 'default' && !plain,
            'weui-btn_warn': type === 'warn',
            'weui-btn_plain-primary': type === 'primary' && plain,
            'weui-btn_plain-default': type === 'default' && plain,
            'weui-btn_disabled': this.props.disabled && !plain,
            'weui-btn_plain-disabled': this.props.disabled && plain,
            [className]: className
        });

        return (
            <Component { ...others } className={ cls }>{ children }</Component>
        );
    }
};
