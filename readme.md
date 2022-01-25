# `act` warning in `@floating-ui/react-dom`

`@floating-ui/react-dom` appears to causes `act` warnings during testing:

```
npm test
```

```
Warning: An update to App inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
```

To start the app, run:

```
npm run dev
```