WeUI 为微信Web服务量身设计  [![Build Status](https://travis-ci.org/weui/react-weui.svg?branch=master)](https://travis-ci.org/weui/react-weui) [![npm version](https://img.shields.io/npm/v/react-weui.svg)](https://www.npmjs.org/package/react-weui) [![Coverage Status](https://coveralls.io/repos/github/weui/react-weui/badge.svg?branch=master)](https://coveralls.io/github/weui/react-weui?branch=master)
====


### WeUI

WeUI是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信 Web 开发量身设计，可以令用户的使用感知更加统一。包含`button`、`cell`、`dialog`、 `progress`、`toast`、`article`、`icon`等各式组件。

[https://github.com/weui/weui](https://github.com/weui/weui)

### React-WeUI

使用`react`的方式来构建界面

### 目录结构

```
react-weui
├── README.md
├── docs                    # 文档说明
├── example                 # 示例代码
├── package.json            # package.json
├── src                     # react-weui组件源码
├── test                    # 测试文件
└── webpack.config.js       # webpack配置文件
```

### 安装

```
npm install weui react-weui --save
```

### 使用

```javascript
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
import 'weui';

const {Button} = WeUI;

class App extends React.Component {
    render() {
        return (
            <Button>hello wechat</Button>
        );
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

### 开发

```
git clone https://github.com/weui/react-weui
cd react-weui
npm install
npm start
```


### 文档

- [快速上手](./docs/installation.md)
- [ActionSheet](./docs/actionsheet.md)
- [Button](./docs/button.md)
- [Cell](./docs/cell.md)
- [Dialog](./docs/dialog.md)
- [Form](./docs/form.md)
- [Icon](./docs/icon.md)
- [Mask](./docs/mask.md)
- [Msg](./docs/msg.md)
- [Progress](./docs/progress.md)
- [Toast](./docs/toast.md)

### 体验

![react-weui](./docs/qrcode.png)

[https://weui.github.io/react-weui](https://weui.github.io/react-weui)

### License

The MIT License([http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT))
 
请自由地享受和参与开源

### 贡献

如果你有好的意见或建议，欢迎给我们提 issue 或 pull request，为提升微信 web 体验贡献力量
