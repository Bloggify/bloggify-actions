
# bloggify-actions

 [![Version](https://img.shields.io/npm/v/bloggify-actions.svg)](https://www.npmjs.com/package/bloggify-actions) [![Downloads](https://img.shields.io/npm/dt/bloggify-actions.svg)](https://www.npmjs.com/package/bloggify-actions)

> High-level module for building the actions functionality. Core module.

## :cloud: Installation

```sh
$ npm i --save bloggify-actions
```


## :clipboard: Example



```js
const bloggifyActions = require("bloggify-actions");

console.log(bloggifyActions());
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


### `bloggifyActions()`
High-level module for building the actions functionality. Core module.

The actions are located, by default, in the `app/actions` directory:

```
// users.js
exports.list = ctx => Bloggify.services.users.getAll()
exports.update = ctx => Bloggify.services.users.update(ctx.data)
exports.insert = ctx => Bloggify.services.users.insert(ctx.data)
exports.remove = ctx => Bloggify.services.users.remove(ctx.data)
```

The actions' handlers should return promises.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].



## :scroll: License

[MIT][license] © [Bloggify][website]

[license]: http://showalicense.com/?fullname=Bloggify%20%3Csupport%40bloggify.org%3E%20(https%3A%2F%2Fbloggify.org)&year=2017#license-mit
[website]: https://bloggify.org
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
