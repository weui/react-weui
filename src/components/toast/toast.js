/**
 * Created by jf on 15/10/27.
 */



import React from 'react';
import classNames from 'classnames';
import Mask from '../mask/index';
import Icon from '../icon/index';


class Toast extends React.Component {
    static propTypes = {};

    static defaultProps = {
        icon: 'toast'
    };

    state = {
        active: false
    };

    render() {
        const {icon, children} = this.props;

        return (
            <div className="weui_toast" style={{display: this.state.active ? 'block' : 'none'}}>
                <Mask transparent={true}/>
                <div className="weui_toast">
                    <Icon value={icon}/>
                    <p className="weui_toast_content">{children}</p>
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
}

export default Toast;