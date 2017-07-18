import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../build/packages';
import Page from '../../component/page';

const MsgDemo = () => (
    <Page className="msg" title="Msg" subTitle="提示页" spacing>
        <Button component={Link} to="/msg/success">Success Message</Button>
        <Button component={Link} to="/msg/fail">Warn Message</Button>
    </Page>
);

export default MsgDemo;
