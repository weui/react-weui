/**
 * Created by n7best.
 */



import React from 'react';
import classNames from 'classnames';

export default class Panel extends React.Component {
    static propTypes = {
        access: React.PropTypes.bool,
    };

    static defaultProps = {
        access: false,
    };

    render() {
        const {children, className, access, ...others} = this.props;
        const cls = classNames({
            weui_panel: true,
            weui_panel_access: access,
            [className]: className
        });

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
};
