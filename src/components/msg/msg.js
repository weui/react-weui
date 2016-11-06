import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import {Button, ButtonArea} from '../button/index';
import { Footer, FooterLinks, FooterLink, FooterText } from '../footer'
import Icon from '../icon/index';
import deprecationWarning from '../../utils/deprecationWarning';

class Msg extends Component {
    static propTypes = {
        type: PropTypes.string,
        buttons: PropTypes.array
    };

    static defaultProps = {
        type: 'success',
        buttons: []
    };

    _renderButtons() {

        return this.props.buttons.map((button, idx) => {
            const {type, label, ...others} = button;
            return (
                <Button key={idx} {...others} type={type}>{label}</Button>
            );
        });
    }

    render() {
        const { className, type, title, description, extraHref, extraText, footer, ...others } = this.props;
        const cls = classNames('weui-msg', {
            [className]: className
        })

        let elFooter = footer;

        if(!elFooter && (extraHref || extraText) ){
            deprecationWarning('Msg extraHref/extraText', 'Msg footer')

            elFooter = () => (
                <Footer>
                    <FooterLinks>
                        <FooterLink href={extraHref}>{extraText}</FooterLink>
                    </FooterLinks>
                </Footer>
            )
        }

        return (
            <div className={cls}>
                <div className="weui-msg__icon-area">
                    <Icon value={type} size='large' />
                </div>
                <div className="weui-msg__text-area">
                    <h2 className="weui-msg__title">{title}</h2>
                    <p className="weui-msg__desc">{description}</p>
                </div>
                <div className="weui-msg__opr-area">
                    <ButtonArea>
                        {this._renderButtons()}
                    </ButtonArea>
                </div>
                <div className="weui-msg__extra-area">
                    {elFooter()}
                </div>
            </div>
        );
    }
}

export default Msg;
