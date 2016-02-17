/**
 * Created by yjcxy12 on 16/1/22.
 */



import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Input extends React.Component {
    static propTypes = {
        defaultValue: PropTypes.string
    };

    static defaultProps = {
        defaultValue: undefined
    };

    render() {
        const { className, ...others } = this.props;
        const cls = classNames({
            weui_input: true,
            [className]: className
        });

        return (
            <input className={cls} {...others}/>
        );
    }
};
