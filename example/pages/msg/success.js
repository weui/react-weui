import React from 'react';
import { Msg, Footer, FooterLinks, FooterLink, FooterText } from '../../../src/index';
import Page from '../../component/page';

const SuccessFooter = ()=>(
    <Footer>
        <FooterLinks>
            <FooterLink href="#">Footer Link</FooterLink>
        </FooterLinks>
        <FooterText>
            Copyright © 2008-2016 weui.io
        </FooterText>
    </Footer>
)

const SuccessMsg = (props) => {
    return (
    <Page className="msg_success">
        <Msg
            type="success"
            title="Action Success"
            description="We have received your feedback"
            buttons={[{
                type: 'primary',
                label: 'Ok',
                onClick: props.history.goBack
            }, {
                type: 'default',
                label: 'Cancel',
                onClick: props.history.goBack
            }]}
            footer={SuccessFooter}
        />
    </Page>
    )
}

export default SuccessMsg;