/**
 * Created by jf on 15/11/12.
 */



import React from 'react';
import classNames from 'classnames';

export default class Cells extends React.Component {
    render() {
        const {children, access, radio, checkbox, form, ...others} = this.props;
        const className = classNames({
            weui_cells: true,
            weui_cells_access: access,
            weui_cells_form: form
        });

        return (
            <div className={className} {...others}>{children}</div>
        );
    }
};