import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Mask from '../mask/index';
import { isAndroid } from '../../utils/mobile_detect';

class Dialog extends Component {
    static propTypes = {
        buttons: PropTypes.array,
        show: PropTypes.bool,
        title: PropTypes.string,
        autoDectect: PropTypes.bool,
        type: PropTypes.string,
    };

    static defaultProps = {
        buttons: [],
        show: false,
        title: '',
        type: '',
        autoDectect: true,
    };

    renderButtons() {
        return this.props.buttons.map((action, idx) => {
            const {type, label, ...others} = action;
            const className = classNames({
                'weui-dialog__btn': true,
                'weui-dialog__btn_default': type === 'default',
                'weui-dialog__btn_primary': type === 'primary'
            });

            return (
                <a key={idx} href="javascript:;" {...others} className={className}>{label}</a>
            );
        });
    }

    render() {
        const {title, show, className, children, buttons, type, autoDectect, ...others} = this.props;
        const styleType = type ? type : 'ios';
        const cls = classNames('weui-dialog', {
            'weui-skin_android': styleType == 'android' || (!type && autoDectect && isAndroid),
            [className]: className
        })

        return (
            <div style={{display: show ? 'block' : 'none'}}>
                <Mask/>
                <div className={cls} {...others}>
                    { title ?
                    <div className="weui-dialog__hd">
                        <strong className="weui-dialog__title">{title}</strong>
                    </div> : false }
                    <div className="weui-dialog__bd">
                        {children}
                    </div>
                    <div className="weui-dialog__ft">
                        {this.renderButtons()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog;