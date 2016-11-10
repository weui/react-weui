import React from 'react';
import classNames from 'classnames';

/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
class Mask extends React.Component {
    static propTypes = {
        /**
         * Whather mask should be transparent (no color)
         *
         */
        transparent: React.PropTypes.bool
    };

    static defaultProps = {
        transparent: false
    };

    render() {
        const {transparent, ...others} = this.props;
        const className = classNames({
            'weui-mask': !transparent,
            'weui-mask_transparent': transparent
        });

        return (
            <div className={className} {...others}></div>
        );
    }
}

export default Mask;