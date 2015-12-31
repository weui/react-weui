
### Dialog

`Dialog`组件分为`Alert`和`Confirm`两种类型。`Alert`作用类似于网页原生的`window.alert`方法，用于提示信息，只有一个`确认`关闭按钮；而`Confirm`作用则类似于网页原生的`window.confirm`，用于让用户确认某些信息，有`关闭`和`取消`按钮。


属性 | 类型 | 默认值 | 可选值 | 备注
-----|------|--------|-------|------|
title| string|   | | alert弹框标题
show| bool| false | | 是否显示
buttons| array| | | 确认按钮描述，至少包含label属性

示例：

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {Dialog, Button} from 'react-weui';
const {Alert, Confirm} = Dialog;

class DialogTest extends React.Component {
    state = {
        showAlert: false,
        showConfirm: false,
        alert: {
            title: '标题标题',
            buttons: [
                {
                    label: '好的',
                    onClick: this.hideAlert.bind(this)
                }
            ]
        },
        confirm: {
            title: '标题标题',
            buttons: [
                {
                    type: 'default',
                    label: '好的',
                    onClick: this.hideConfirm.bind(this)
                },
                {
                    type: 'primary',
                    label: '我愿意',
                    onClick: this.hideConfirm.bind(this)
                }
            ]
        }
    };

    render() {
        return (
            <section>
                <Button type="warn" onClick={this.showAlert.bind(this)}>警告你</Button>
                <Button type="primary" onClick={this.showConfirm.bind(this)}>确认</Button>


                <Alert 
                    show={this.state.showAlert}
                    title={this.state.alert.title} 
                    buttons={this.state.alert.buttons}>
                        警告
                </Alert>
                <Confirm 
                    show={this.state.showConfirm}
                    title={this.state.confirm.title} 
                    buttons={this.state.confirm.buttons}>
                        你愿意把银行卡的钱都转给jf吗？
                </Confirm>
            </section>
        );
    }

    showAlert(){
        this.setState({showAlert: true});
    }

    hideAlert(){
        this.setState({showAlert: false});
    }

    showConfirm() {
        this.setState({showConfirm: true});
    }

    hideConfirm() {
        this.setState({showConfirm: false});
    }
}

ReactDOM.render(DialogTest, document.getElementById('container'));

```
