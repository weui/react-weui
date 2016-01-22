
### Msg

结果页通常来说可以认为进行一系列操作步骤后，作为流程结束的总结性页面。结果页的作用主要是告知用户操作处理结果以及必要的相关细节（可用于确认之前的操作是否有误）等信息；若该流程用于开启或关闭某些重要功能，可在结果页增加与该功能相关的描述性内容；除此之外，结果页也可以承载一些附加价值操作，例如提供抽奖、关注公众号等功能入口。

#### 属性

属性名|类型|默认值|可选值|备注
------|----|------|------|----|
type|string|success|有效的icon名|icon类型
title | string|||标题
description|string|||描述
buttons|array| [ ]| | 底部操作按钮，至少包含label属性
extraText | string | | | 额外内容
extraHref | string | | | 额外内容链接

buttons的描述示例如下：

```javascript
const buttons = [{
    label: '确定',
    onClick: () => {}
}];
```

#### 示例

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';

const {Msg} = WeUI;

ReactDOM.render((
    <Msg type="success" title="提交成功" description="你的反馈我们已经收到" extraText="查看详情" extraHref="#"/>
), document.getElementById('container'));
```
