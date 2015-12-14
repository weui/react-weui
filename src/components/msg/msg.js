/**
 * Created by jf on 15/11/4.
 */



import React from 'react';
import classNames from 'classnames';

import {Button} from '../button/index';
import Icon from '../icon/index';

class Msg extends React.Component {
    static propTypes = {
        type: React.PropTypes.string,
        buttons: React.PropTypes.array
    };

    static defaultProps = {
        type: 'success',
        buttons: []
    };

    _renderButtons() {

        return this.props.buttons.map((button, idx) => {
            const {type, label, ...others} = button;
            return (
                <Button key={idx} {...others} type={type}>{label}</Button>
            );
        });
    }

    render() {
        return (
            <div className="weui_msg">
                <div className="weui_icon_area">
                    <Icon value={this.props.type} className="weui_icon_msg"/>
                </div>
                <div className="weui_text_area">
                    <h2 className="weui_msg_title">{this.props.title}</h2>
                    <p className="weui_msg_desc">{this.props.description}</p>
                </div>
                <div className="weui_opr_area">
                    <p className="weui_btn_area">
                        {this._renderButtons()}
                    </p>
                </div>
            </div>
        );
    }
}

export default Msg;
