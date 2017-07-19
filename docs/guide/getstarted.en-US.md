## Installation (1.0.0)

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

## Example

We have several examples on the documentation. Here is the first one to get you started:
```javascript
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
