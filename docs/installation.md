
### 快速上手


#### 安装`react-weui`

```
npm install weui react-weui --save
```

#### 使用

假设目录结构如下:
```
react-weui-demo
├── README.md
├── app
│   ├── index.html
│   ├── app.less
│   └── app.js
├── package.json
└── webpack.config.js
```

```javascript
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
import 'weui';

const {Button, Toast} = WeUI;

class App extends React.Component {
    state = {
            show: false,
            timer: null
    };

    componentWillUnmount(){
        this.state.timer && clearTimeout(this.state.timer);
    }
    
    render() {
        return (
            <div className="container">
                <Button type="primary"  onClick={this.show.bind(this)}>确认</Button>
                
                <Toast show={show}>loading...</Toast>
            </div>
        );
    }
    
    show(){
        this.setState({show: true});

        this.state.timer = setTimeout(()=>{
            this.setState({show: false});
        }, 3000);
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

**注意** react-weui 本身没有包含样式文件, 样式文件统一在 [https://github.com/weui/weui](https://github.com/weui/weui) 维护. 使用`react-weui`, 可以使用以下两种方式引入样式文件:

1. 在js文件中引入, 然后使用webpack的`css-loader`和`style-loader`打包

2. 在html文件中直接以link的方式引入`weui/dist/style/weui.min.css`