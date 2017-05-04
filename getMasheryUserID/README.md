# Get the current user's Mashery ID

The current user's mashery ID is exposed as a global variable in the DOM. You can get it like this:

```js
var username = typeof mashery_info === 'undefined' || !mashery_info || !mashery_info.username ? null : mashery_info.username;
```

If the user is logged in, `username` returns their Mashery ID. If they're logged out, it returns `null`.