import React from 'react';
import classNames from 'classnames';

const PopupHeader = (props) => {
    const { left, right, leftOnClick, rightOnClick, className } = props;
    const cls = classNames('weui-popup__hd', className);
    return (
        <div className={cls}>
            <a className="weui-popup__action" onClick={leftOnClick}> {left} </a>
            <a className="weui-popup__action" onClick={rightOnClick}> {right} </a>
        </div>
    )
}

export default PopupHeader;