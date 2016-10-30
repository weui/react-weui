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
        const {type, size, plain, className, children, ...others} = this.props;
        const Component = this.props.href ? 'a' : 'button';
        const cls = classNames({
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
            <Component {...others} className={cls}>{children}</Component>
        );
    }
};
