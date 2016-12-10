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
// app.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import using commonJS Module *Require Plugins
//import { Button } from 'react-weui'

//import Using ES6 syntax
import WeUI from 'react-weui';

//import styles
import 'weui';
import 'react-weui/lib/react-weui.min.css';

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
