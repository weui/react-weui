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
        const {transparent, className, ...others} = this.props;
        const clz = classNames({
            'weui-mask': !transparent,
            'weui-mask_transparent': transparent
        }, className);

        return (
            <div className={clz} {...others}></div>
        );
    }
}

export default Mask;