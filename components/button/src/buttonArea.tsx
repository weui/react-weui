import * as React from 'react';
import classNames from '../../utils/classnames';
import { ButtonAreaProps, buttonAreaDirection } from './interface';


const InternalButtonArea = (props: ButtonAreaProps) => {
    const {direction, children, className} = props;
    const cls = classNames(className, {
        'weui-btn-area': true,
        'weui-btn-area_inline': direction === buttonAreaDirection.horizontal
    });
    return (<div className={cls}>
        {children}
    </div>)
}

const ButtonArea = React.forwardRef(InternalButtonArea);
ButtonArea.displayName = 'ButtonArea';
ButtonArea.defaultProps = {
    direction: buttonAreaDirection.vertical
};

export default ButtonArea;
