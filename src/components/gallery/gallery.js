import React from 'react';
import classNames from 'classnames';

/**
 * Full screen photo display
 *
 */
const Gallery = (props) => {
    const { children, className, show, src, ...others } = props;
    const cls = classNames({
        'weui-gallery': true,
        [className]: className
    });

    return (
        <div className={cls} style={{display: show ? 'block' : 'none'}} {...others}>
            <span className="weui-gallery__img" style={{backgroundImage: `url(${src})`}}></span>
            <div className="weui-gallery__opr">
                { children }
            </div>
        </div>
    );
};

Gallery.propTypes = {
    /**
     * indicate whather the component is display
     *
     */
    show: React.PropTypes.bool,
    /**
     * image source url or base64 encode
     *
     */
    src: React.PropTypes.string
}

Gallery.defaultProps = {
    show: undefined,
    src: ''
}

export default Gallery;

