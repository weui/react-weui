import React from 'react';
import classNames from 'classnames';

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

export default Gallery;

