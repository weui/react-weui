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
        active: React.PropTypes.bool
    };

    static defaultProps = {
        menus: [],
        actions: [],
        active: false
    };

    state = {
        active: this.props.active
    };

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

    render() {
        const className = classNames({
            weui_actionsheet: true,
            weui_actionsheet_toggle: this.state.active == true
        });
        return (
            <div>
                <Mask style={{display: this.state.active ? 'block' : 'none'}} onClick={this.hide.bind(this)}/>
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

    show() {
        this.setState({active: true});
    }

    hide() {
        this.setState({active: false});
    }
};
