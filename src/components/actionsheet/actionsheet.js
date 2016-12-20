import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Mask from '../mask/index';
import './actionsheet.less';

/**
 * Used to display a collection of actions that contain a set of interactivity, including descriptions, links, and so on. Popup from the bottom, generally used to respond to user clicks on the page.
 */
class ActionSheet extends Component {
    static propTypes = {
        /**
         * Array of Objects for menus, `label` property is Required
         *
         */
        menus: PropTypes.array,
        /**
         * Array of Objects for actions, `label` property is Required
         *
         */
        actions: PropTypes.array,
        /**
         * To display ActionSheet
         *
         */
        show: PropTypes.bool,
        /**
         * Function triggers when user click on the mask
         *
         */
        onRequestClose: PropTypes.func,
        /**
         * Allow component to autodetect device and display corresponding style
         */
        autoDectect: PropTypes.bool,
        /**
         * style: ios/android
         */
        type: PropTypes.string,
    };

    static defaultProps = {
        type: '',
        menus: [],
        actions: [],
        show: false,
        autoDectect: true
    };

    constructor(props) {
        super(props);

        this.state = {
            isAndroid: ''
        };

        this.handleMaskClick = this.handleMaskClick.bind(this)
    }

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

    handleMaskClick(e){
        if(this.props.onRequestClose) this.props.onRequestClose(e)
    }

    componentDidMount(){
        const { isAndroid } = require('../../utils/mobile_detect');
        this.setState({
            isAndroid,
        });
    }

    render() {
        const {show, autoDectect, type, onRequestClose, menus, actions, ...others} = this.props;
        const cls = classNames({
            'weui-actionsheet': true,
            'weui-actionsheet_toggle': show
        });

        let styleType = type ? type : 'ios';

        if(!type && autoDectect){
            if(this.state.isAndroid) styleType = 'android';
        }

        return (
            <div
                className={styleType == 'android' ? 'weui-skin_android' : ''}
            >
                    <Mask style={{display: show ? 'block' : 'none'}} onClick={this.handleMaskClick} />
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
