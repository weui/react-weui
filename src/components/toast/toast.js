/**
 * Created by jf on 15/10/27.
 */



import React from 'react';
import classNames from 'classnames';
import Mask from '../mask/index';
import Icon from '../icon/index';


class Toast extends React.Component {
    static propTypes = {
        icon: React.PropTypes.string,
        show: React.PropTypes.bool
    };

    static defaultProps = {
        icon: 'toast',
        show: false
    };

    render() {
        const {icon, show, children} = this.props;

        return (
            <div className={icon === 'loading' ? 'weui_loading_toast' : ''} style={{display: show ? 'block' : 'none'}}>
                <Mask transparent={true}/>
                <div className="weui_toast">
                    <Icon value={icon}/>
                    <p className="weui_toast_content">{children}</p>
                </div>
            </div>
        );
    }
}

export default Toast;