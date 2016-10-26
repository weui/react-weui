
### Panel, PanelHeader、PanelBody、PanelFooter

Panel由PanelHeader（可选）、PanelBody、PanelFooter（可选）三部分组成，主要承载了图文组合列表MediaBox。

属性名|类型|默认值|可选值|备注
------|----|------|------|----|
access|bool|false | true, false| 控制PanelFooter是否显示小箭头以及点击的Active态

PanelFooter通过href属性来判断使用div还是a.


### MediaBox
图文组合列表,据不同业务可自定义不同的内容. 包括图文组合列表appmsg、文字组合列表text以及小图文组合列表small_appmsg

属性名|类型|默认值|可选值|备注
------|----|------|------|----|
type|string|text | appmsg, text, small_appmsg| 控制图文组合列表排版

#### MediaBoxHeader 
可选，主要用于封面图居左, 内容为img时会自动加入相对应class

#### MediaBoxBody
主要用于图文组合列表(appmsg)内容容器，可包含MediaBoxTitle, MediaBoxDescription

#### MediaBoxInfo, MediaBoxInfoMeta

显示其他信息的容器

MediaBoxInfo

属性名|类型|默认值|可选值|备注
------|----|------|------|----|
data|array|[] | {extra: false, label:'内容'}| 自动映射MediaBoxInfoMeta 

MediaBoxInfoMeta

属性名|类型|默认值|可选值|备注
------|----|------|------|----|
extra|bool|false | true, false| 是否为更多内容（添加padding,显示左边）

MediaBoxInfo支持使用data属性来自动映射MediaBoxInfoMeta

#### 示例

```javascript
 <Panel access>
   <PanelHeader>
   图文组合列表
   </PanelHeader>
   <PanelBody>
   <MediaBox type="appmsg" href="javascript:void(0);">
     <MediaBoxHeader>{appMsgIcon}</MediaBoxHeader>
     <MediaBoxBody>
       <MediaBoxTitle>标题一</MediaBoxTitle>
       <MediaBoxDescription>
       由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
       </MediaBoxDescription>
     </MediaBoxBody>
   </MediaBox>
   <MediaBox type="appmsg" href="javascript:void(0);">
     <MediaBoxHeader>{appMsgIcon}</MediaBoxHeader>
     <MediaBoxBody>
       <MediaBoxTitle>标题二</MediaBoxTitle>
       <MediaBoxDescription>
       由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
       </MediaBoxDescription>
     </MediaBoxBody>
   </MediaBox>
   </PanelBody>
   <PanelFooter href="javascript:void(0);">
   查看更多
   </PanelFooter>
 </Panel>

```


