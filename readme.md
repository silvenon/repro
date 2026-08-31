# Repro: Vitest v5.0.0-rc.4 storing traces with long file names

Storing Playwright traces of test names that have 158+ characters fails in Vitest `v5.0.0-rc.4`:

```
Error: ENAMETOOLONG: name too long, copyfile '/Users/silvenon/Code/repro/__traces__/my.test.tsx/browser--chromium--this-test-does-not-support-test-names-of-158-characters-because-the-trace-file-name-generated-from-such-a-name-is-far-too-long-for-the-file-system-to-store-it-0-0.trace.zip' -> '/Users/silvenon/Code/repro/.vitest/attachments/-traces-my-test-tsx-browser--chromium--this-test-does-not-support-test-names-of-158-characters-because-the-trace-file-name-generated-from-such-a-name-is-far-too-long-for-the-file-system-to-store-it-0-0-trace-zip-ff8eb041c3d7410919571627c885b5da53441d8f.zip'
```

This does not have to be a single long test name, total test name can stack up within `describe` blocks.

```sh
pnpm install # install deps
pnpm test:setup # install browsers
pnpm test # run tests with --browser.trace=on
```
