
### Cell

列表视图，用于将信息以列表的结构显示在页面上，是web上最常用的内容结构。 为了保证足够的灵活性，Cell组件分为容器`Cells`、`CellsTitle`、`CellsTips`、`Cell`、`CellHeader`、 `CellBody`、`CellFooter`。

#### Cells

是对`div.weui_cells`的封装，作为Cell集合的容器。`Cells`可以包含多个属性，用于扩展Cell组件的实用场景。

属性名|类型|默认值|可选值|备注
------|----|------|------|----|
access|bool|false | true, false| 控制Cell是否显示小箭头以及点击的Active态

#### CellsTitle

是对`div.weui_cells_title`的封装，作为Cell集合的说明标题。暂无可选属性，只需要将说明文字作为Children即可。例如：`<CellsTitle>Cell集合的标题</CellsTitle>`。

#### CellsTips

是对`div.weui_cells_tips`的封装，作为Cell集合的额外的补充说明，显示在Cell集合的底部。用法同`CellsTitle`。

#### Cell、CellHeader、CellBody、CellFooter

代表一个Cell组件，通常需要使用`Cells`包裹。`Cell`组件需要包含`CellHeader`、`CellBody`以及`CellFooter`，分别表示Cell的头部、主体部分和尾部。


#### 示例

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
import './app.less';

const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} = WeUI;

class App extends React.Component{
    render() {
        return (
            <section>
                <CellsTitle>文章列表</CellsTitle>
                <Cells access>
                    <Cell className="list_item">
                        <CellHeader>
                            <img className="cover" src="http://mmrb.github.io/avatar/jf.jpg" alt=""/>
                        </CellHeader>
                        <CellBody>
                            <h2 className="title">WeUI 发布——微信官方UI库</h2>
                            <p className="desc">团队里的几个小伙子把微信里面web app的UI，按照设计规范给梳理了一遍，并将之开源了出来。</p>
                        </CellBody>
                        <CellFooter/>
                    </Cell>
                    <Cell className="list_item">
                        <CellHeader>
                            <img className="cover" src="http://mmrb.github.io/avatar/bear.jpg" alt=""/>
                        </CellHeader>
                        <CellBody>
                            <h2 className="title">【纪念】服务器被删除了</h2>
                            <p className="desc">因为没钱付服务器年费，所以一直都是月付，然后每个月服务器商会发来短信告诉我要缴费了。</p>
                        </CellBody>
                        <CellFooter/>
                    </Cell>
                </Cells>
            </section>
        );
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

```less
// app.less
body{
    background-color: #FBF9FE;
}
.list_item{
    .cover{
        display: block;
        width: 60px;
        height: 60px;
        margin-right: 15px;
    }
    .title{
        font-weight: normal;
        font-size: 16px;
    }
    .desc{
        color: #888888;
        font-size: 14px;
        display: -webkit-box;
        max-width: 100%;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
```
