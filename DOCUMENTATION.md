## Documentation

You can see below the API reference of this module.

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

