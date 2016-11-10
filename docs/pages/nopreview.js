import React from 'react';
import FontAwesome from 'react-fontawesome';
import './nopreview.less';
//import { Button } from 'react-weui';

const NoPreview = (props) =>
(
    <div className="App__preview--none">
      <FontAwesome name="weixin" size="4x" />
      <p>{props.langs.nopreview}</p>
    </div>
);

export default NoPreview;