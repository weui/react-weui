import React from 'react';
import {
    Footer,
    FooterText,
    FooterLinks,
    FooterLink
} from '../../../build/packages';
import Page from '../../component/page';


const FooterDemo = (props) => (
    <Page className="footer" title="Footer" subTitle="页脚" spacing>
        <Footer>
            <FooterText>Copyright &copy; 2008-2016 weui.io</FooterText>
        </Footer>
        <br/><br/>
        <Footer>
            <FooterLinks>
                <FooterLink href="javascript:void(0);">Link</FooterLink>
            </FooterLinks>
            <FooterText>Copyright &copy; 2008-2016 weui.io</FooterText>
        </Footer>
        <br/><br/>
        <Footer>
            <FooterLinks>
                <FooterLink href="javascript:void(0);">Link</FooterLink>
                <FooterLink href="javascript:void(0);">Link</FooterLink>
            </FooterLinks>
            <FooterText>Copyright &copy; 2008-2016 weui.io</FooterText>
        </Footer>
    </Page>
);

export default FooterDemo;