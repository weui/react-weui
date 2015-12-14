

### ActionSheet

用于显示包含一系列可交互的动作集合，包括说明、跳转等。由底部弹出，一般用于响应用户对页面的点击。

#### 属性

属性名| 类型 | 默认值 | 可选值 | 备注 |
------|------|--------|--------|------|
menus |array |[ ]      |        |菜单描述，至少包含`label`属性|
actions|array|[ ]      |        |动作描述，至少包含`label`属性|

例如：
```javascript
const menus = [{
        label: '拍照',
        onClick: ()=>{
    
        }
    }, {
        label: '从手机相册中选择',
        onClick: ()=>{
    
        }
    }];

const actions = [{
        label: '取消',
        onClick: ()=>{
            this.refs.actionsheet.hide();
        }
    }];
```

#### 方法

- show 显示ActionSheet

- hide 隐藏ActionSheet

#### 示例

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {ActionSheet, Button} from '../../index';

class App extends React.Component {

    state = {
        menus: [{
            label: '拍照',
            onClick: ()=>{

            }
        }, {
            label: '从手机相册中选择',
            onClick: ()=>{

            }
        }],
        actions: [{
            label: '取消',
            onClick: ()=>{
                this.refs.actionsheet.hide();
            }
        }]
    };

    handleClick() {
        this.refs.actionsheet.show();
    }
    render() {
        return (
            <section style={{padding: `15px`}}>
                <Button onClick={this.handleClick.bind(this)}>选择</Button>
                <ActionSheet ref="actionsheet" menus={this.state.menus} actions={this.state.actions} />
            </section>
        );
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));
```