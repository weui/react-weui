/**
 * Created by n7best
 */



import React, { Component } from 'react';
import classNames from 'classnames';
import Grid from './grid';

export default class Grids extends Component {
    static propTypes = {
      data: React.PropTypes.array
    };

    static defaultProps = {
      data: []
    };

    renderData(data) {
        return data.map((item,i) => {
            return <Grid
                    key={i}
                    icon={item.icon}
                    label={item.label}
                    {...item}
                    />;
        });
    }

    render() {

        const {children, data, className, ...others} = this.props;
        const cls = classNames({
            'weui-grids': true
        }, className);

        return (
            <div className={cls} {...others}>
            {data.length > 0 ? this.renderData(data) : children}
            </div>
        );
    }
};