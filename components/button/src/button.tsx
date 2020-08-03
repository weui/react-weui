import * as React from 'react';
import {
    ButtonProps,
    buttonTypes,
    buttonSize
} from './interface';
import classNames from '../../utils/classnames';

const InternalButton = (props: ButtonProps) => {
    const {
        size,
        type,
        children,
        className,
        loading,
        disabled
    } = props;
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        const { onClick } = props;
        if (onClick && typeof onClick === 'function') {
            onClick(e)
        }
    };
    const cls = classNames(className, {
        'weui-btn': true,
        'weui-btn_mini': size === 'small',
        'weui-btn_primary': type === 'primary',
        'weui-btn_default': type === 'default',
        'weui-btn_warn': type === 'warn',
        'weui-btn_disabled': disabled,
        'weui-btn_loading': loading
    });
    return (<a
        href='#'
        onClick={handleClick}
        className={cls}
    >
        { loading ? <i className='weui-loading'/> : null }
        { children }
    </a>)
}

const Button = React.forwardRef(InternalButton);
Button.displayName = 'Button';
Button.defaultProps = {
    disabled: false,
    type: buttonTypes.primary,
    size: buttonSize.normal,
    loading: false
};

export default Button;
