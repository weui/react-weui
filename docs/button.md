

### 按钮

按钮常见的操作场景：确定(primary)、取消(default)、警示(warn).

### 属性

属性名称  | 类型 | 默认值 | 可选值
------------- | ------------- | --------| -------------
type  | string | primary | primary, default, warn
size  | string   | normal| normal, small
plain | bool | false | false, true | 是否为空心按钮
disabled | bool | false | false, true | 是否为禁用状态


### 示例：

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-weui';

ReactDOM.render((
    <section>
        <Button type="primary">确认</Button>
        <Button type="default">取消</Button>
        <Button type="warn">警告</Button>
        
        <Button type="primary" size="small">警告</Button>
    </section>
), document.getElementById('container'));
```


### 按钮组

按钮组(ButtonArea), 通常用在Form, Msg底部,包裹1个或多个按钮. 排列方向可以分为水平排列(horizontal)和垂直排列(vertical).


### 属性

属性名称  | 类型 | 默认值 | 可选值
------------- | ------------- | --------| -------------
direction  | string | vertical | vertical, horizontal | 按钮排列方向

### 示例

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {ButtonArea, Button} from 'react-weui';

ReactDOM.render((
    <section>
        <ButtonArea>
            <Button>确定</Button>
            <Button type="default">取消</Button>
        </ButtonArea>
        
        <ButtonArea direction="horizontal">
            <Button>确定</Button>
            <Button type="default">取消</Button>
        </ButtonArea>
    </section>
), document.getElementById('container'));
```