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
        const { className, defaultValue, ...others } = this.props;
        const cls = classNames({
            weui_input: true,
            [className]: className
        });

        return (
            <input className={cls} defaultValue={defaultValue} {...others}/>
        );
    }
};
