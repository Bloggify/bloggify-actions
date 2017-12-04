"use strict"

const requireDir = require("require-dir")
    , forEach = require("iterate-object")
    , isThere = require("is-there")

/**
 * bloggifyActions
 * High-level module for building the actions functionality. Core module.
 *
 * The actions are located, by default, in the `app/actions` directory:
 *
 * ```
 * // users.js
 * exports.list = ctx => Bloggify.services.users.getAll()
 * exports.update = ctx => Bloggify.services.users.update(ctx.data)
 * exports.insert = ctx => Bloggify.services.users.insert(ctx.data)
 * exports.remove = ctx => Bloggify.services.users.remove(ctx.data)
 * ```
 *
 * The actions' handlers should return promises.
 *
 * @name bloggifyActions
 * @function
 */
module.exports = () => {
    const actions = Bloggify._actions = requireDir(Bloggify.paths.actions)

    let globalHandlers = null
    if (actions.global) {
        globalHandlers = actions.global
        delete actions.global
    }

    forEach(actions, (group, groupName) => {
        Object.assign(group, globalHandlers)
        forEach(group, (action, name) => {
            const actionName = `${groupName}.${name}`;
            let method = /insert|update|remove|delete/i.test(name) ? "post" : "get"
            let htmlCb = null

            if (Array.isArray(action)) {
                method = action[0]
                htmlCb = action[2]
                action = action[1]
            } else if (typeof action === "object") {
                method = action.method || method
                action = action.action
            }

            if (group.before) {
                Bloggify.actions[method](actionName, ctx => {
                    return Promise.resolve().then(() => group.before(ctx, name, actionName)).then(data => {
                        return action(ctx)
                    })
                }, htmlCb)
            } else {
                Bloggify.actions[method](actionName, ctx => {
                    return Promise.resolve().then(() => action(ctx))
                }, htmlCb)
            }
        })
    })
}
