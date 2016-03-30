/**
 * Created by n7best on 16/2/25.
 */



import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Select extends React.Component {
    static propTypes = {
      data: React.PropTypes.array
    };

    static defaultProps = {
      data: []
    };

    renderData(data) {
        return data.map((item,i) => {
            return <option
                    key={i}
                    value={item.value}
                    {...item}
                    >
                        {item.label}
                   </option>;
        });
    }

    render() {
        const { className, data, children, ...others } = this.props;
        const cls = classNames({
            weui_select: true,
            [className]: className
        });

        return (
            <select className={cls} {...others}>
                {data.length > 0 ? this.renderData(data) : children}
            </select>
        );
    }
};
