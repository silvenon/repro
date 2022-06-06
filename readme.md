# Repro: Playwright VS Code in an ESM + TypeScript project

Playwright itself is able to run tests fine:

```
npm test
```

However, Playwright's VS Code extension fails with the following error:

```
node:events:505
      throw er; // Unhandled 'error' event
      ^

Error: EAGAIN: resource temporarily unavailable, read
Emitted 'error' event on ReadStream instance at:
    at emitErrorNT (node:internal/streams/destroy:151:8)
    at emitErrorCloseNT (node:internal/streams/destroy:116:3)
    at processTicksAndRejections (node:internal/process/task_queues:82:21) {
  errno: -35,
  code: 'EAGAIN',
  syscall: 'read'
}
```