

### ActionSheet

用于显示包含一系列可交互的动作集合，包括说明、跳转等。由底部弹出，一般用于响应用户对页面的点击。

#### 属性

属性名| 类型 | 默认值 | 可选值 | 备注 |
------|------|--------|--------|------|
menus |array |[ ]      |        |菜单描述，至少包含`label`属性|
actions|array|[ ]      |        |动作描述，至少包含`label`属性|
show|bool|false      |        |是否显示|
onRequestClose|func|      |        |请求关闭事件, 点击蒙层时触发|

#### 示例

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {ActionSheet, Button} from '../../index';

class App extends React.Component {

    state = {
        show: false,
        menus: [{
            label: '拍照',
            className: 'customClassName',
            onClick: ()=>{

            }
        }, {
            label: '从手机相册中选择',
            className: 'customClassName',
            onClick: ()=>{

            }
        }],
        actions: [{
            label: '取消',
            className: 'customClassName',
            onClick: this.hide.bind(this)
        }]
    };


    render() {
        return (
            <section style={{padding: `15px`}}>
                <Button onClick={this.show.bind(this)}>选择</Button>
                <ActionSheet show={this.state.show} menus={this.state.menus} actions={this.state.actions} onRequestClose={this.hide.bind(this)} />
            </section>
        );
    }
    
    show() {
        this.setState({show: true});
    }

    hide() {
        this.setState({show: false});
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));
```
