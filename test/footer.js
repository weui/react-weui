import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const { Footer, FooterText, FooterLinks, FooterLink } = WeUI;


describe(`<Footer></Footer>`, ()=>{
    const content = 'Copyright &copy; 2008-2016 weui.io'
    const wrapper = shallow(
        <Footer>
            <FooterLinks>
                <FooterLink href="javascript:void(0);">Link</FooterLink>
            </FooterLinks>
            <FooterText>{content}</FooterText>
        </Footer>
    );

    it(`should have 'weui-footer' class name`, ()=>{
        assert(wrapper.hasClass(`weui-footer`))
    });

    it(`footerlinks should have 'weui-footer__links' class`, ()=>{
        assert(wrapper.find(FooterLinks).shallow().hasClass('weui-footer__links'));
    });

    it(`footerlink should have 'weui-footer__link' class`, ()=>{
        assert(wrapper.find(FooterLinks).shallow().find(FooterLink).shallow().hasClass('weui-footer__link'));
    });

    it(`footertext should have 'weui-footer__text' class`, ()=>{
        assert(wrapper.find(FooterText).shallow().hasClass('weui-footer__text'));
    });
});
