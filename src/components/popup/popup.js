import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Mask from '../mask/index';
import './popup.less';

class Popup extends Component {
    static propTypes = {
        show: PropTypes.bool,
        enableMask: PropTypes.bool
    };

    static defaultProps = {
        show: false,
        enableMask: false
    }

    render(){
        const { className, children, show, onRequestClose, ...others } = this.props;
        const cls = classNames('weui-popup', {
            'weui-popup_toggle' : show
        }, className);

        return (
            <div>
                <Mask style={{display: show ? 'block' : 'none'}} onClick={onRequestClose} />
                <div className={cls} {...others} >
                    { children }
                </div>
            </div>
        )
    }
}

export default Popup;