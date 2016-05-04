
### Form

表单，可以分成“输入型”和“选择型”两种。输入型包括单行文本（文本、数值、电话、密码等）、多行文本；选择型包括下拉选择、单选、多选、开关、日期时间等。 

Form组件是对`div.weui_cells`和`weui_cells_form`的封装，作为Form集合的容器。`Form`可以包含多个属性，用于扩展Form组件的实用场景。

属性名|类型|默认值|可选值|备注
------|----|------|------|----|
radio|bool|false | true, false| 控制容器是否用于Radio单选模式
checkbox|bool|false | true, false| 控制容器是否用于checkbox多选模式

#### FormCell
Cell组件用于表单的单独封装，`FormCell`可以包含多个属性，用于扩展Form组件的实用场景, 默认用法参考`Cell`, 可包含CellHeader`、`CellBody`以及`CellFooter`，分别表示Cell的头部、主体部分和尾部。

属性名|类型|默认值|可选值|备注
------|----|------|------|----|
vcode|bool|false | true, false| 控制Cell是否用于vcode验证码/图片
warn|bool|false | true, false| 控制Cell是否显示错误
radio|bool|false | true, false| 控制Cell是否用于Radio单选
checkbox|bool|false | true, false| 控制Cell是否用于checkbox多选
select|bool|false | true, false| 控制Cell是否用于select多选
selectPos|string|undefined | 'before','after'| 控制Cell显示select的位置分为前选before,后选after,单独则不需要使用selectPos

#### Input

是对`weui_input`的封装，组件继承所有属性，可直接参考默认input,
`react默认值属性为defaultValue`.

### 示例：

```javascript
<Form>
    <FormCell>
        <CellHeader>
            <Label>qq</Label>
        </CellHeader>
        <CellBody>
            <Input type="tel" placeholder="请输入qq号"/>
        </CellBody>
    </FormCell>
    <FormCell vcode={true}>
        <CellHeader>
            <Label>验证码</Label>
        </CellHeader>
        <CellBody>
            <Input type="number" placeholder="请输入验证码"/>
        </CellBody>
        <CellFooter>
            <img src={vcodeSrc} />
        </CellFooter>
    </FormCell>
    <FormCell vcode={true} warn={true}>
        <CellHeader>
            <Label>验证码</Label>
        </CellHeader>
        <CellBody>
            <Input type="number" placeholder="请输入验证码"/>
        </CellBody>
        <CellFooter>
            <Icon value="warn" />
            <img src={vcodeSrc} />
        </CellFooter>
    </FormCell>
</Form>
```
#### Switch

是对`weui_switch`的封装，组件继承所有属性，可直接参考默认checkbox.

### 示例：
```javascript
<Form>
    <FormCell switch>
        <CellBody>标题文字</CellBody>
        <CellFooter>
            <Switch/>
        </CellFooter>
    </FormCell>
</Form>
```

#### Radio

是对`weui_radio`的封装，组件继承所有属性，可直接参考默认radio,

### 示例：
```javascript
<Form radio>
    <FormCell radio>
        <CellBody>标题文字</CellBody>
        <CellFooter>
            <Radio name="radio1" value="1" defaultChecked/>
        </CellFooter>
    </FormCell>
    <FormCell radio>
        <CellBody>标题文字</CellBody>
        <CellFooter>
            <Radio name="radio1" value="2"/>
        </CellFooter>
    </FormCell>
</Form>
```
#### Checkbox

是对`weui_checkbox`的封装，组件继承所有属性，可直接参考默认checkbox,

### 示例：
```javascript
<Form checkbox>
    <FormCell checkbox>
        <CellHeader>
            <Checkbox name="checkbox1" value="1"/>
        </CellHeader>
        <CellBody>标题文字</CellBody>
    </FormCell>
    <FormCell checkbox>
        <CellHeader>
            <Checkbox name="checkbox2" value="2" defaultChecked/>
        </CellHeader>
        <CellBody>标题文字</CellBody>
    </FormCell>
</Form>
```
#### Select

是对`weui_select`的封装，组件继承所有属性，可直接参考默认select. 位置需要配合FormCell的selectPos属性来定位. 提供一个快捷属性`data`用于直接渲染选项数据组.

属性名|类型|默认值|可选值|备注
------|----|------|------|----|
data  | array | [] | [{value,label},...]|数据组，个体数值至少包含value和label

### 示例：
```javascript
<Form>
    <FormCell select selectPos="before">
        <CellHeader>
            <Select>
                <option value="1">+86</option>
                <option value="2">+80</option>
                <option value="3">+84</option>
                <option value="4">+87</option>
            </Select>
        </CellHeader>
        <CellBody>
            <Input type="tel" placeholder="请输入号码"/>
        </CellBody>
    </FormCell>
    <FormCell select>
        <CellBody>
            <Select defaultValue="2">
                <option value="1">微信号</option>
                <option value="2">QQ号</option>
                <option value="3">Email</option>
            </Select>
        </CellBody>
    </FormCell>
    <FormCell select selectPos="after">
        <CellHeader>国家/地区</CellHeader>
        <CellBody>
            <Select data={[
                {
                    value: 1,
                    label: '中国'
                },
                {
                    value: 2,
                    label: '美国'
                },
                {
                    value: 3,
                    label: '英国'
                }
            ]} />
        </CellBody>
    </FormCell>
</Form>
```

#### TextArea

是对`weui_textarea`的封装，包含`showCounter`属性用于是否显示字数条, 组件继承所有属性，可使用`maxlength`来限制字数，其余用法参考默认textarea,

属性名|类型|默认值|可选值|备注
------|----|------|------|----|
showCounter|bool|true | true, false| 控制容器是显示字数条

```javascript
<Form>
    <FormCell>
        <CellBody>
            <TextArea placeholder="请输入评论" rows="3" maxlength="200"></TextArea>
        </CellBody>
    </FormCell>
</Form>
```

#### Uploader

是对`weui_uploader`的封装，包含多个属性, `files`属性用于控制组件图片的显示. `files`数据组，个体数值至少包含`url`属性和`error`, `status`两个可选属性. 预览容器继承其他所有属性,可使用onClick来实现图片全屏预览.

用户通过选择图片后会通过canvas压缩然后使用`onChange`属性返回图片的数据. 返回数据包括`file`对象和react本身的`event`事件.
 `file`对象包括以下属性：
- `data`: base64加码之后的图片数据,
- `lastModified`
- `lastModifiedDate`
- `name`
- `size`
- `type`
- `nativeFile` 事件原生的file

属性名|类型|默认值|可选值|备注
------|----|------|------|----|
title|string|'图片上传' | '标题' | 控制容器标题
maxCount|number|4 | 4,5...| 上传组件的最大文件数
maxWidth|number|500 | 400,500...| canvas的最大图片压缩宽度
onChange|func|true | (file,e)=>{}| 用于接收压缩后图片的方法.
onError|func|undefined | (msg)=>{}| 用于接收错误信息的方法
files|array|[] | [{url, *error, *status},...]| 显示的图片预览数据组

```javascript
const demoFiles = [
    {
        url: '图片地址/图片base64码',
        onClick: e=>alert('事件测试')
    },
    {
        url: '图片地址/图片base64码'
    },
    {
        url: '图片地址/图片base64码'
    },
    {
        url: '图片地址/图片base64码',
        error: true
    },
    {
        url: '图片地址/图片base64码',
        status: '50%'
    }
]
<Form>
    <FormCell>
        <CellBody>
            <Uploader
                title="图片上传"
                maxCount={6}
                files={this.state.demoFiles}
                onError={msg => alert(msg)}
                onChange={file => {
                    let newFiles = [...this.state.demoFiles, {url:file.data}];
                    this.setState({
                        demoFiles: newFiles
                    });
                }}
            />
        </CellBody>
    </FormCell>
</Form>
```
