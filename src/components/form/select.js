import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * weui wrapper for select
 *
 */
export default class Select extends Component {
    static propTypes = {
        /**
         * object arrays of options, `value` and `label` properties is required
         *
         */
        data: PropTypes.array
    };

    static defaultProps = {
      data: []
    };

    renderData(data) {
        return data.map((item,i) => (
            <option
                key={i}
                value={item.value}
                {...item}
            >
                {item.label}
           </option>
        ));
    }

    render() {
        const { className, data, children, ...others } = this.props;
        const cls = classNames({
            'weui-select': true,
            [className]: className
        });

        return (
            <select className={cls} {...others}>
                {data.length > 0 ? this.renderData(data) : children}
            </select>
        );
    }
};
