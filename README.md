<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


















# bloggify-actions

 [![Version](https://img.shields.io/npm/v/bloggify-actions.svg)](https://www.npmjs.com/package/bloggify-actions) [![Downloads](https://img.shields.io/npm/dt/bloggify-actions.svg)](https://www.npmjs.com/package/bloggify-actions)







> High-level module for building the actions functionality. Core module.

















## :cloud: Installation

```sh
# Using npm
npm install --save bloggify-actions

# Using yarn
yarn add bloggify-actions
```






















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









## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:














## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].
















## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - `bloggify`
 - `bloggify-cli`











## :scroll: License

[MIT][license] © [Bloggify][website]






[license]: /LICENSE
[website]: https://bloggify.org
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
