/**
 * Created by jf on 15/11/3.
 */



import React from 'react';
import classNames from 'classnames';

class Icon extends React.Component {
    static propTypes = {
        value: React.PropTypes.string,
        size: React.PropTypes.string
    };

    static defaultProps = {
        value: 'success',
        size: 'small'
    };

    render() {
        const {value, size, className, ...others} = this.props;
        const cls = classNames({
            ['weui_icon_' + value]: true,
            weui_icon_msg: size === 'large',
            [className]: className
        });

        return (
            <i {...others} className={cls}/>
        );
    }
}

export default Icon;