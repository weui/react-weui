/**
 * Created by n7best
 */


import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class TextArea extends React.Component {
    static propTypes = {
        showCounter: PropTypes.bool,
        defaultValue: PropTypes.string,
    };

    static defaultProps = {
        showCounter: true,
        defaultValue: undefined
    };

    state = {
        textCounter: this.props.defaultValue ? this.props.defaultValue.length : 0
    };

    handleChange(e){
        this.setState({textCounter: e.target.value.length});

        //forward event to props if any
        if(this.props.onChange) this.props.onChange(e);
    }

    render(){
        const { className, children, showCounter, maxlength, ...others } = this.props;
        const cls = classNames({
            weui_textarea: true,
            [className]: className
        });

        return (
            <div>
                <textarea
                className={cls}
                maxLength={maxlength}
                onChange={this.handleChange.bind(this)}
                {...others}>
                    {children}
                </textarea>
                {
                    showCounter ?
                    <div className="weui_textarea_counter">
                        <span>{this.state.textCounter}</span>{maxlength ? '/' + maxlength : false}
                    </div>
                    : false
                }
            </div>
        );
    }
};
