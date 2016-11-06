import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Mask from '../mask/index';
import { isAndroid } from '../../utils/mobile_detect';
import './actionsheet.less';

class ActionSheet extends Component {
    static propTypes = {
        menus: PropTypes.array,
        actions: PropTypes.array,
        show: PropTypes.bool,
        onRequestClose: PropTypes.func,
        autoDectect: PropTypes.bool,
        type: PropTypes.string,
    };

    static defaultProps = {
        type: '',
        menus: [],
        actions: [],
        show: false,
        autoDectect: true,
        onRequestClose: () => {}
    };

    renderMenuItem() {
        return this.props.menus.map((menu, idx) => {
            const {label, className, ...others} = menu;
            const cls = classNames({
                'weui-actionsheet__cell': true,
                [className]: className
            });

            return (
                <div key={idx} {...others} className={cls}>{label}</div>
            );
        });
    }

    renderActions() {
        return this.props.actions.map((action, idx) => {
            const {label, className, ...others} = action;
            const cls = classNames({
                'weui-actionsheet__cell': true,
                [className]: className
            });

            return (
                <div key={idx} {...others} className={cls}>{label}</div>
            );
        });
    }

    render() {
        const {show, autoDectect, type, onRequestClose, ...others} = this.props;
        const cls = classNames({
            'weui-actionsheet': true,
            'weui-actionsheet_toggle': show
        });

        let styleType = type ? type : 'ios';

        if(!type && autoDectect){
            if(isAndroid) styleType = 'android';
        }

        return (
            <div
                className={styleType == 'android' ? 'weui-skin_android' : ''}
            >
                    <Mask style={{display: show ? 'block' : 'none'}} onClick={onRequestClose} />
                    <div className={cls} {...others} >
                        <div className="weui-actionsheet__menu">
                            {this.renderMenuItem()}
                        </div>
                        <div className="weui-actionsheet__action">
                            {this.renderActions()}
                        </div>
                    </div>
            </div>
        );
    }
};

export default ActionSheet;