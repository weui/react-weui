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

        if (value === 'loading') {
            return (
                <div className="weui_loading">
                    {
                        [...Array(12)].map((x, i) => {
                            return (
                                <div key={i} className={`weui_loading_leaf weui_loading_leaf_${i}`}></div>
                            );
                        })
                    }
                </div>
            );
        }
        else {
            return (
                <i {...others} className={cls}/>
            );
        }
    }
}

export default Icon;