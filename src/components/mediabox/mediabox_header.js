/**
 * Created by n7best
 */



import React from 'react';
import classNames from 'classnames';

export default class MediaBoxHeader extends React.Component {
    render() {
        const {children, ...others} = this.props;
        const className = classNames({
            weui_media_hd: true
        });

        let childrenWithProps = React.Children.map(children, child => {
            if(child.type == 'img' && !child.props.className){
              return React.cloneElement(child, { className: 'weui_media_appmsg_thumb' });
            }else{
              return child;
            }
        });

        return (
            <div className={className} {...others}>{childrenWithProps}</div>
        );
    }
};