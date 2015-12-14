
### Dialog

`Dialog`组件分为`Alert`和`Confirm`两种类型。`Alert`作用类似于网页原生的`window.alert`方法，用于提示信息，只有一个`确认`关闭按钮；而`Confirm`作用则类似于网页原生的`window.confirm`，用于让用户确认某些信息，有`关闭`和`取消`按钮。


属性 | 类型 | 默认值 | 可选值 | 备注
-----|------|--------|-------|------|
title| string| 标题  | | alert弹框标题
buttons| array| | | 确认按钮描述，至少包含label属性

#### 方法

- `show` 显示弹框

- `hide` 隐藏弹框

示例：

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {Dialog, Button} from 'react-weui';
const {Alert, Confirm} = Dialog;

class DialogTest extends React.Component {
    state = {
        alert: {
            title: '标题标题',
            buttons: [
                {
                    label: '好的',
                    onClick: this.onHideAlert.bind(this)
                }
            ]
        },
        confirm: {
            title: '标题标题',
            buttons: [
                {
                    type: 'default',
                    label: '好的',
                    onClick: this.onHideConfirm.bind(this)
                },
                {
                    type: 'primary',
                    label: '我愿意',
                    onClick: this.onHideConfirm.bind(this)
                }
            ]
        }
    };

    render() {
        return (
            <section>
                <Button type="warn" onClick={this.onShowAlert.bind(this)}>警告你</Button>
                <Button type="primary" onClick={this.onShowConfirm.bind(this)}>确认</Button>


                <Alert 
                    ref="alert"
                    title={this.state.alert.title} 
                    buttons={this.state.alert.buttons}>
                        警告
                </Alert>
                <Confirm 
                    ref="confirm" 
                    title={this.state.confirm.title} 
                    buttons={this.state.confirm.buttons}>
                        你愿意把银行卡的钱都转给jf吗？
                </Confirm>
            </section>
        );
    }

    onShowAlert(){
        this.refs.alert.show();
    }

    onHideAlert(){
        this.refs.alert.hide();
    }

    onShowConfirm(){
        this.refs.confirm.show();
    }

    onHideConfirm(){
        this.refs.confirm.hide();
    }
}

ReactDOM.render(DialogTest, document.getElementById('container'));

```
