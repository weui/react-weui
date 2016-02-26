/**
 * Created by n7best on 16/2/25.
 */



import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Radio extends React.Component {

    render() {
        const { className, ...others } = this.props;
        const cls = classNames({
            weui_check: true,
            [className]: className
        });

        return (
            <div>
                <input className={cls} type="radio" {...others}/>
                <span className="weui_icon_checked"></span>
            </div>
        );
    }
};
