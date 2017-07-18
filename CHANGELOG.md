### CHANGELOG

#### 1.1.0

Breaking Changes
- Remove mobile_detect utilities, ActionSheet and Dialog will needs to provide a platform by user.
- Used standard prop-types library
- css file now in `react-weui/build/packages/react-weui.css`

Changes

- [e43fcb2](https://github.com/weui/react-weui/pull/185/commits/e43fcb2c94d3b455ad566afa0be3b55b2fd874ee) remove findDOMNode from searchbar
- [0410833](https://github.com/weui/react-weui/pull/192/commits/0410833d8d90b79c72c8b12e52c9d1185481efe9) typing error
- [08e50f4](https://github.com/weui/react-weui/pull/213/commits/08e50f43e41b97c4d965264bbfc9260476f6daca) update lint rule and adjust code within project
- [ec45e68](https://github.com/weui/react-weui/pull/213/commits/ec45e6817eee7d7b8e481ffa400eb128de9b186c) fix grid links
- #174 add lang props to CityPicker
- CityPicker will selected default selections
- #182 Msg Component now support child element, it will not display title or description if it's not provided
- #197 SearchBar add new property `defaultValue`
- InfiniteLoader add disable, onScroll and onScrollEnd property
- PullToRefresh add disable property
- Use Rollup.js as bundler for library
- Use Webpack 3, React-router 4 for demo and docs
- Use ES2015 module standard
- Include classnames, warning function in library

New Addon Component
- Page

Known Problem Pending Fix

- Issues #203 Upload Image angle problem


#### 1.0.5

Changes

- Gallery now support multiple image, pass array of urls to `src` property
- Add `DefaultIndex` to Gallery to use with multiple image source
- Uploader updates with Gallery component to use multiple images

New Addon Components

- Swiper

#### 1.0.4

- fix some server rendering issues with component

New Addon Components

- PullToRefresh
- InfiniteLoader


#### 1.0.3

- user have to manully import some patch css from 'lib/react-weui.min.css'

#### 1.0.0-alpha

Production:

- Update class to compliance with `weui` 1.0.x

Develop:

- Update to Babel 6
- Add Depreciate warnings

Breaking Changes:

- Remove Dialog.Alert (use Dialog directly)
- Remove Dialog.Confirm (use Dialog directly)
- Icon (safe-warn, safe-success) are taking off from weui

New Components:

- Agreement
- VCode
- Toptips
- Gallery
- GalleryDelete
- Flex
- FlexItem
- Footer
- FooterText
- FooterLinks
- FooterLink
- LoadMore
- Preview
- PreviewHeader
- PreviewBody
- PreviewFooter
- PreviewItem
- PreviewButton
- Picker
- Slider
- Badge
- version

New Addon Components:

- Popup
- PopupHeader

New Property:
- Cell & Button add property `component`, you can pass in component like (Link from react-router)
- Button type add 'vcode'
- Uploader onFileClick(event, file, index)
- Cell link property
- Icon add primary property (only use for warn currently)
- Progress add showCancel property

Depreciate on next release

- Cells Access
- Panel Access
- Uploader -> File -> onClick
- Icons value `safe_success`, `safe_warn`, `success_circle`, `success_no_circle`, `waiting_circle`,`info_circle`

Known Issues

- React-Router Warnings from using older version of react-router

#### 0.4.0 (2016-04-28)

- [增强] ActionSheet 的 menus 和 actions 增加支持传入自定义 className
- [增强] Cell 组件增加支持传入自定义的 className
- [改进] 升级到 react v15
- [修复] 更新 `weui` 依赖版本, 修复 navbar 在 iOS 下无法点击的 bug
- [修复] 修复 searchbar, toast icon size

详情参考:

- [42bf8f3](https://github.com/weui/react-weui/commit/42bf8f3) #51 ActionSheet 的 menus 和 actions 增加支持传入自定义 className
- [a09719a](https://github.com/weui/react-weui/commit/a09719a) #68 Cell* 增加支持传入自定义 className
- [513cca0](https://github.com/weui/react-weui/commit/513cca0) 修复 package.son 依赖
- [3bd5517](https://github.com/weui/react-weui/commit/3bd5517) update react version and move to peerDependencies (#66)
- [f12d858](https://github.com/weui/react-weui/commit/f12d858) update `weui` version
- [9df3c19](https://github.com/weui/react-weui/commit/9df3c19) #58, patched searchbar, add iconSize for toast #62, change weui dependency to 0.4.1 (#63)

#### 0.3.0-beta (2016-03-30)

- 【新增】增加 tab 组件
- 【新增】增加搜索框组件
- 【新增】增加上传组件
- 【新增】增加 radio, input, textarea, label 等表单元素
- 【新增】增加 switch 组件
- 【修复】修复页面不能滚动的bug
- 【改进】demo 页面切换增加动画效果

详情参考:

- [a8eeed8](https://github.com/weui/react-weui/commit/a8eeed8) add tabs and serachbar withou doc and test
- [065c51d](https://github.com/weui/react-weui/commit/065c51d) add uploader w/ test files
- [4a751f9](https://github.com/weui/react-weui/commit/4a751f9) add radio,checkbox,select w/o testand doc
- [81f0859](https://github.com/weui/react-weui/commit/81f0859) add switch
- [d4a0125](https://github.com/weui/react-weui/commit/d4a0125) fix 页面不能滚动的bug
- [b88affc](https://github.com/weui/react-weui/commit/b88affc) 页面切换添加动画效果

#### 0.2.0 (2015-12-29)

- [0146ad](https://github.com/weui/react-weui/commit/0146ad) #7 remove toast `show` & hide method, use `show` prop instead
- [437e5d](https://github.com/weui/react-weui/commit/437e5d) #7 remove Alert `show` & hide method, use `show` prop instead
- [77c885](https://github.com/weui/react-weui/commit/77c885) #7 remove Confirm `show` & hide method, use `show` prop instead
- [3a158e](https://github.com/weui/react-weui/commit/3a158e) #7 remove ActionSheet `show` & hide method, use `show` prop instead
- [3a4c8b](https://github.com/weui/react-weui/commit/3a4c8b) #14 add loading icon & loading toast
- [862d98](https://github.com/weui/react-weui/commit/862d98) #15 `Cells`允许传入自定义className


#### 0.1.0 (2015-12-14)

- Initial release
