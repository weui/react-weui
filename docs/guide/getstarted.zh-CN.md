## 安装 (1.0.0)

使用 [npm](http://npmjs.com/):

如果 React 没安装 (全新项目)

```
npm install --save react react-dom
npm install --save weui@1.1.0 react-weui
```

如果 React 已经安装

```
npm install weui@1.1.0 react-weui --save
```

## 例子

我们的组件文档里头有很多例子, 这里提供给一个快速上手的例子:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-weui';
//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';

const App = () => <Button>hello wechat</Button>;

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```
