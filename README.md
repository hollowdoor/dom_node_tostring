dom-node-tostring
=================

Install
-------

`npm install --save dom-node-tostring`

Usage
-----

```javascript
const nodeToString = require('dom-node-tostring');
console.log(nodeToString(document.querySelector('body')));
```

Or with es2015 modules:

```javascript
import nodeToString from 'dom-node-tostring';
console.log(nodeToString(document.querySelector('body')));
```

About
-----

Sometimes I want to get what would be equivalent to outerHTML without using outerHTML. This module solves that problem.
