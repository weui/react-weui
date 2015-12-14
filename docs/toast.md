
### Toast

`Toast`用于临时显示某些信息，并且会在数秒后自动消失。这些信息通常是轻量级操作的成功、失败或等待状态信息。

属性 | 类型 | 默认值 | 可选值 | 备注
-----|------|--------|-------|------|
icon|string|toast|所有icon| 

示例：

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Toast} from 'react-weui';

class App extends React.Component {
    handleClick() {
        this.refs.toast.show();
    }
    render() {
        <section>
            <Button onClick={this.handleClick.bind(this)}>显示toast</Button>
            <Toast ref="toast">
                加载中...
            </Toast>
        </section>
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```