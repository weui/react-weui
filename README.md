# React-WeUI [![Build Status](https://travis-ci.org/weui/react-weui.svg?branch=master)](https://travis-ci.org/weui/react-weui) [![npm version](https://img.shields.io/npm/v/react-weui.svg)](https://www.npmjs.org/package/react-weui)

[WeUI](https://github.com/weui/weui) Components build with [React](http://facebook.github.io/react/).

[![Coverage Status](https://coveralls.io/repos/github/weui/react-weui/badge.svg?branch=master)](https://coveralls.io/github/weui/react-weui?branch=master)  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests) [![QQ](http://pub.idqqimg.com/wpa/images/group.png)](http://jq.qq.com/?_wv=1027&k=413HLfV)

## Docs

1.0.x [documentation](https://weui.github.io/react-weui/docs/) with live examples.
0.4.x [documentation](https://n7best.github.io/react-weui-doc-0.4.0) with live examples.

## Installation

With [npm](http://npmjs.com/):

If React is not installed

```
npm install --save react react-dom
npm install --save weui@1.1.0 react-weui
```

With React Installed

```
npm install weui@1.1.0 react-weui --save
```

To use the development version (`API might changes on realese version`)

```
npm install react-weui@alpha --save
```

With browser (CDN by [unpkg](http://unpkg.com/))

Javacript
```
https://unpkg.com/react-weui@1.1.2
```

CSS
```
https://unpkg.com/react-weui@1.1.1/build/dist/react-weui.css
```
## Example

We have several examples on the documentation. Here is the first one to get you started:
```javascript
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-weui';
//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';

const App = () => <Button>hello wechat</Button>;

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

## Contributing

Welcome and send the PR in! Development of components will happen in this github repo.

See the [contributing guidelines](https://github.com/n7best/react-weui-1/blob/master/CONTRIBUTING.md) for details.

## Mobile Demo

![react-weui](./docs/qrcode.png)

[1.0.0](https://weui.github.io/react-weui)

## License

The MIT License([http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT))
