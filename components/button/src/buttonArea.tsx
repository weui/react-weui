import * as React from "react";
import classNames from "../../utils/classnames";
import { ButtonAreaProps } from './interface';

class ButtonArea extends React.Component<ButtonAreaProps> {

    static defaultProps = {
        direction: 'vertical'
    };

    render() {
        const {direction, children, className} = this.props;
        const cls = classNames(className, {
            'weui-btn-area': true,
            'weui-btn-area_inline': direction === 'horizontal'
        });

        return (
            <div className={cls}>
                {children}
            </div>
        );
    }
};

export default ButtonArea;
