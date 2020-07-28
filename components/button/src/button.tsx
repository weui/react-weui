import * as React from "react";
import {
    ButtonProps
} from './interface'
import classNames from "../../utils/classnames";

class Button extends React.Component<ButtonProps> {
    static defaultProps = {
        disabled: false,
        type: 'primary',
        size: 'normal',
        loading: false
    };

    click = (e) => {
        const { onClick } = this.props;
        if (e) {
            e.preventDefault();
        }
        if (onClick && typeof onClick === 'function') {
            onClick(e);
        }
        return false;
    }
    
    render() {
        const {
            size,
            type,
            children,
            className,
            loading
        } = this.props
        const cls = classNames(className, {
            'weui-btn': true,
            'weui-btn_mini': size === 'small',
            'weui-btn_primary': type === 'primary',
            'weui-btn_default': type === 'default',
            'weui-btn_warn': type === 'warn',
            'weui-btn_disabled': this.props.disabled,
            'weui-btn_loading': loading
        })
        return <a
            href="#"
            onClick={this.click}
            className={cls}
        >
            { loading ? <i className="weui-loading"></i> : null }
            { children }</a>
    }
}

export default Button
