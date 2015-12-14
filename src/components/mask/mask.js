/**
 * Created by jf on 15/10/27.
 */



import React from 'react';
import classNames from 'classnames';

class Mask extends React.Component {
    static propTypes = {
        transparent: React.PropTypes.bool
    };

    static defaultProps = {
        transparent: false
    };

    render() {
        const {transparent, ...others} = this.props;
        const className = classNames({
            'weui_mask': !transparent,
            'weui_mask_transparent': transparent
        });

        return (
            <div className={className} {...others}></div>
        );
    }
}

export default Mask;