/**
 * Created by jf on 15/11/12.
 */



import React from 'react';
import classNames from 'classnames';

export default class Cell extends React.Component {
    render() {
        const {className, children, ...others} = this.props;
        const Component = this.props.href ? 'a' : this.props.htmlFor ? 'label' : 'div';
        const cls = classNames({
            weui_cell: true,
            weui_check_label: this.props.htmlFor,
            weui_cell_switch: this.props.switch,
            weui_cells_radio: this.props.radio,
            weui_cells_checkbox: this.props.checkbox,
            [className]: className
        });

        return (
            <Component className={cls} {...others}>{children}</Component>
        );
    }
};