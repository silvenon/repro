# Repro for [posthtml/posthtml-expressions#89](https://github.com/posthtml/posthtml-expressions/issues/89)

PostHTML is being configured with posthtml-expressions and run with gulp-posthtml to reproduce an issue described in [posthtml/posthtml-expressions#89](https://github.com/posthtml/posthtml-expressions/issues/89) where gulp-posthtml fails to emit an error because errors caused by posthtml-expressions are not instances of `Error`, which is a behavior that gulp's plugin-error [relies on](https://github.com/gulpjs/plugin-error/blob/1d51476e4d7da44c1daea246531ae822617e4565/index.js#L158).

Install dependencies:

```sh
yarn
```

Run problematic code:

```sh
yarn gulp build
```

Now you should see the following error thrown by plugin-error:

```
(node:24287) UnhandledPromiseRejectionWarning: Error: Missing error message
    at new PluginError (/Users/silvenon/Code/repro/node_modules/plugin-error/index.js:64:11)
    at /Users/silvenon/Code/repro/node_modules/gulp-posthtml/index.js:85:14
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:24287) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
(node:24287) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

However, if you go to `node_modules/gulp-posthtml/index.js` and, for example, modify this line:

```diff
-cb(new Error(PLUGIN_NAME, err))
+cb(new Error(PLUGIN_NAME, err.message))
```

You should see the real error message:

```
Message:
    Cannot read property 'bar' of undefined
Details:
    domainEmitter: [object Object]
    domainThrown: false
```
