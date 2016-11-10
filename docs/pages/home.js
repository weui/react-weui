import React from 'react';
import FontAwesome from 'react-fontawesome';
import './home.less';
//import { Button } from 'react-weui';

const Home = () =>
(
  <div className="App__preview background--canvas flex-center">
    <div className="App__preview--none">
      <FontAwesome name="weixin" size="4x" />
      <p>Hello, React-WeUI</p>
    </div>
  </div>
);

export default Home;