import React from 'react';
import classNames from 'classnames';
import './toptips.less';

const Toptips = (props) => {
    const { className, warn, info, primary, children, show, ...others } = props;
    const cls = classNames({
        'weui-toptips': true,
        'weui-toptips_default': !warn && !info && !primary,
        'weui-toptips_warn': warn,
        'weui-toptips_info': info,
        'weui-toptips_primary': primary,
        [className]: className
    });

    return (
        <div className={cls} {...others} style={{ display: show ? 'block' : 'none'}}>
            {children}
        </div>
    );
};

Toptips.defaultProps = {
    show: false,
}

export default Toptips
