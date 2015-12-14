
### progress

progress用于上传、下载等耗时并且需要显示进度的场景，用户可以随时中断该操作。

####属性

属性名|类型|默认值|可选值|备注
------|----|------|------|-----|
value| float| 0 | 0~100 | 进度百分比
onClick| function| | | 操作方法，常用于暂停、取消等


### 示例

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';

const {Progress} = WeUI;

class App extends React.Component {

    state = {
        value: 0,
        timer: null,
        isUploading: false
    };

    start() {
        if (this.state.isUploading) {
            return;
        }

        this.state.isUploading = true;
        this.upload();
    }

    pause() {
        this.setState({isUploading: false});
    }

    upload() {
        if (!this.state.isUploading) {
            return;
        }
        this.setState({value: ++this.state.value % 100});
        setTimeout(this.upload.bind(this), 20);
    }

    render() {
        return (
            <section style={{padding: `20px`}}>
                <Progress value={this.state.value} onClick={this.pause.bind(this)} />
                <br/>
                <Button onClick={this.start.bind(this)} disabled={this.state.isUploading}>上传</Button>
            </section>
        );
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));
```

