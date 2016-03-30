### Gird 九宫格

Grid 九宫格，功能类似于微信钱包界面中的九宫格，用于展示有多个相同级别的入口。包含功能的图标和简洁的文字描述。

### Grids
是对div.weui_grids的封装，作为grids集合的容器。Grids拥有一个快捷属性data，在不需要而外修改的情况下直接渲染九宫格。

属性名称  | 类型 | 默认值 | 可选值
------------- | ------------- | --------| -------------
data  | array | [] | 数据组，个体数值至少包含icon和label

### Grid, GridIcon, GridLabel
是对div.weui_grid的封装，作为grid集合的容器。Grid拥有两个快捷属性icon,label，在不需要而外修改的情况下直接渲染。 在不使用快捷属性情况下，Grid需要包含GridIcon和GridLabel两个组件， 分别表示图标和文字

属性名称  | 类型 | 默认值 | 可选值
------------- | ------------- | --------| -------------
icon  | any | false | 快捷图标植入，接受任何形式
label | string | '' | 快捷label植入

### 快捷示例：

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {Grids, Icon} from 'react-weui';

let demoItems = [
        {
            icon: <Icon/>,
            label: 'Button',
            href: '#button'
        }, {
            icon: <Icon/>,
            label: 'Cell',
            href: '#cell'
        }, {
            icon: <Icon/>,
            label: 'Toast',
            href: '#toast'
}];
        
ReactDOM.render((
    <Grids data={demoItems} />
), document.getElementById('container'));
```

### 全带入示例：
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {Grids, Grid, GridIcon, GridLabel, Icon} from 'react-weui';

ReactDOM.render((
    <Grids>
        <Grid>
            <GridIcon><Icon/></GridIcon>
            <GridLabel>Item 1</GridLabel>
        </Grid>
        <Grid>
            <GridIcon><Icon/></GridIcon>
            <GridLabel>Item 2</GridLabel>
        </Grid>
        <Grid>
            <GridIcon><Icon/></GridIcon>
            <GridLabel>Item 3</GridLabel>
        </Grid>
        <Grid>
            <GridIcon><Icon/></GridIcon>
            <GridLabel>Item 4</GridLabel>
        </Grid>
        <Grid>
            <GridIcon><Icon/></GridIcon>
            <GridLabel>Item 5</GridLabel>
        </Grid>
        <Grid>
            <GridIcon><Icon/></GridIcon>
            <GridLabel>Item 6</GridLabel>
        </Grid>
    </Grids>
), document.getElementById('container'));
```