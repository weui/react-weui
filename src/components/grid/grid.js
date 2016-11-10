import React from 'react';
import classNames from 'classnames';
import GridIcon from './grid_icon';
import GridLabel from './grid_label';

/**
 * WeUI Grid wrapper, contain elements of `GridIcon` and `GridLabel`
 *
 */
export default class Grid extends React.Component {
    static propTypes = {
      /**
       * Label string for grid
       *
       */
      label: React.PropTypes.string,
      /**
       * Icon placeholder
       *
       */
      icon: React.PropTypes.any
    };

    static defaultProps = {
      label: '',
      icon: false
    };

    render() {
        const {children, icon, label, className, ...others} = this.props;
        const cls = classNames({
            'weui-grid': true
        }, className);

        return (
            <a className={cls} {...others}>
              {icon ? <GridIcon>{icon}</GridIcon> : false}
              {children}
              {label ? <GridLabel>{label}</GridLabel> : false}
            </a>
        );
    }
};