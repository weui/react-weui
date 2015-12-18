/**
 * Created by jf on 15/11/26.
 */


import React from 'react';
import classNames from 'classnames';
import Mask from '../mask/index';

export default class ActionSheet extends React.Component {
    static propTypes = {
        menus: React.PropTypes.array,
        actions: React.PropTypes.array,
        show: React.PropTypes.bool,
        onRequestClose: React.PropTypes.func
    };

    static defaultProps = {
        menus: [],
        actions: [],
        show: false,
        onRequestClose: ()=> {

        }
    };

    render() {
        const {show, onRequestClose} = this.props;
        const className = classNames({
            weui_actionsheet: true,
            weui_actionsheet_toggle: show
        });

        return (
            <div>
                <Mask style={{display: show ? 'block' : 'none'}} onClick={onRequestClose}/>
                <div className={className}>
                    <div className="weui_actionsheet_menu">
                        {this._renderMenuItem()}
                    </div>
                    <div className="weui_actionsheet_action">
                        {this._renderActions()}
                    </div>
                </div>
            </div>
        );
    }

    _renderMenuItem() {
        return this.props.menus.map((menu, idx) => {
            const {label, ...others} = menu;
            const className = classNames({
                weui_actionsheet_cell: true
            });

            return (
                <div key={idx} {...others} className={className}>{label}</div>
            );
        });
    }

    _renderActions() {
        return this.props.actions.map((action, idx) => {
            const {label, ...others} = action;
            const className = classNames({
                weui_actionsheet_cell: true
            });

            return (
                <div key={idx} {...others} className={className}>{label}</div>
            );
        });
    }
};
