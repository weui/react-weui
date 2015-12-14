/**
 * Created by jf on 15/10/27.
 */



import React from 'react';
import classNames from 'classnames';

export default class Button extends React.Component {
    static propTypes = {
        disabled: React.PropTypes.bool,
        type: React.PropTypes.string,
        size: React.PropTypes.string
    };

    static defaultProps = {
        disabled: false,
        type: 'primary',
        size: 'normal'
    };

    render() {
        const {type, size, disabled, plain, className, children, ...others} = this.props;
        const Component = this.props.href ? 'a' : 'button';
        const cls = classNames({
            weui_btn: true,

            weui_btn_primary: type === 'primary' && !plain,
            weui_btn_default: type === 'default' && !plain,
            weui_btn_warn: type === 'warn',

            weui_btn_plain_primary: type === 'primary' && plain,

            weui_btn_plain_default: type === 'default' && plain,

            weui_btn_mini: size === 'small',

            weui_btn_disabled: disabled,

            [className]: className
        });

        return (
            <Component {...others} className={cls}>{children}</Component>
        );
    }
};