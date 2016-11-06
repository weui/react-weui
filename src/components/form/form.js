/**
 * Created by yjcxy12 on 16/1/22.
 */



import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Form extends Component {
    static propTypes = {
        radio: PropTypes.bool,
        checkbox: PropTypes.bool
    };

    static defaultProps = {
        radio: false,
        checkbox: false
    };

    render() {
        const { children, className, radio, checkbox, ...others } = this.props;
        const cls = classNames({
            'weui-cells': true,
            'weui-cells_form': !radio && !checkbox,
            'weui-cells_radio': radio,
            'weui-cells_checkbox': checkbox,
            [className]: className
        });

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
};


export default Form;