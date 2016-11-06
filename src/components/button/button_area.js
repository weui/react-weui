import React, { Component } from 'react';
import classNames from 'classnames';

class ButtonArea extends Component {
    static propTypes = {
        direction: React.PropTypes.string
    };

    static defaultProps = {
        direction: 'vertical'
    };

    render() {
        const {direction, children, className} = this.props;
        const cls = classNames({
            'weui-btn-area': true,
            'weui-btn-area_inline': direction === 'horizontal',
            [className]: className
        });

        return (
            <div className={cls}>
                {children}
            </div>
        );
    }
};

export default ButtonArea;