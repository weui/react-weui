
### Mask

`Mask`遮罩蒙层，分透明和半透明两种，主要用于`Dialog`、`Toast`等有弹框情况下，对整个屏幕进行遮罩。

属性 | 类型 | 默认值 | 可选值 | 备注
-----|------|--------|-------|------|
transparent|bool|false|true, false| 是否透明

示例：

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {Mask} from 'react-weui';

ReactDOM.render((
    <section>
        <Mask/>
    </section>
), document.getElementById('container'));

```
