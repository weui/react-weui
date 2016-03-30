/**
 * Created by BearJ on 16/2/18.
 */



import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Switch extends React.Component {
    static propTypes = {
        defaultValue: PropTypes.string
    };

    static defaultProps = {
        defaultValue: undefined
    };

    render() {
        const { className, ...others } = this.props;
        const cls = classNames({
            weui_switch: true,
            [className]: className
        });

        return (
            <input className={cls} type="checkbox" {...others}/>
        );
    }
};
