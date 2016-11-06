//1.0.0 components

import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';

const LoadMore = (props) => {

    const { className, children, loading, showLine, showDot, ...others } = props;
    const cls = classNames({
        'weui-loadmore': true,
        'weui-loadmore_line': showLine,
        'weui-loadmore_dot': showDot,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            { loading ? <Icon value='loading' /> : false }
            <span className="weui-loadmore__tips">
            { children }
            </span>
        </div>
    )
}

export default LoadMore;