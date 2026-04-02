"use strict"

import importDir from "import-dir-dynamic"

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
export default async () => {
    Bloggify.ready(async err => {
        if (err) { return; }
        const actions = Bloggify._actions = await importDir(Bloggify.paths.actions)
        let globalHandlers = null

        if (actions.global) {
            globalHandlers = actions.global
            delete actions.global
        }

        for (const [groupName, group] of Object.entries(actions)) {
            if (!group) { continue; }
            Object.assign(group, globalHandlers)

            for (const [name, action] of Object.entries(group)) {
                const actionName = `${groupName}.${name}`;
                let method = /create|insert|update|remove|delete/i.test(name) ? "post" : "get"
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
            }
        }
    })
}