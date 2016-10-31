#React-WeUI [![Build Status](https://travis-ci.org/weui/react-weui.svg?branch=master)](https://travis-ci.org/weui/react-weui) [![npm version](https://img.shields.io/npm/v/react-weui.svg)](https://www.npmjs.org/package/react-weui)

[WeUI](https://github.com/weui/weui) Components build with [React](http://facebook.github.io/react/).

[![Coverage Status](https://coveralls.io/repos/github/weui/react-weui/badge.svg?branch=master)](https://coveralls.io/github/weui/react-weui?branch=master)  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests) [![QQ](http://pub.idqqimg.com/wpa/images/group.png)](http://jq.qq.com/?_wv=1027&k=413HLfV)

__Please See [0.4.x](https://github.com/weui/react-weui/tree/0.4.x) branch__ for current stable usage and usage with weui 0.4.x

__Master branch under active development for WeUI 1.0.0 - APIs will change.__ Check out the [1.0.0 Progression](https://github.com/weui/react-weui/projects/1) and [contributing guidelines](https://github.com/n7best/react-weui-1/blob/master/CONTRIBUTING.md) to see where you can help out.

## Docs


See the [documentation](https://n7best.github.io/react-weui-doc-0.4.0) with live examples (0.4.x).

## Installation

With [npm](http://npmjs.com/):

```
npm install weui react-weui --save
```

## Example

We have several examples on the documentation. Here is the first one to get you started:
```javascript
// app.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//commonJS Module *Require Plugins
//import { Button } from 'react-weui'

//ES6 Import
import WeUI from 'react-weui';
import 'weui';
const {Button} = WeUI;

class App extends Component {
    render() {
        return (
            <Button>hello wechat</Button>
        );
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

## Contributing

Welcome and send the PR in! Development of components will happen in this github repo.

See the [contributing guidelines](https://github.com/n7best/react-weui-1/blob/master/CONTRIBUTING.md) for details.

## Mobile Demo

![react-weui](./docs/qrcode.png)

[https://weui.github.io/react-weui](https://weui.github.io/react-weui)

## License

The MIT License([http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT))


