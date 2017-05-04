# toggleIODocs.js

Dynamically toggle the IO-Docs selection using a URL query selector.

## Getting Started

### 1. Include the script in your Portal.

Add the script under `Manage` > `Portal` > `Portal Settings`. You can either add it as an external script or inline the code.

### 2. Initialize the script.

Call `toggleIODocs.init();` to initialize toggleIODocs.js

```html
<script>
	toggleIODocs.init();
</script>
```

### 3. Visit IO Docs with a query string in your URL.

Set `api` to the name of the API in the select menu, and (optionally) `method` as the name of a method to open and jump to.

```
// Load an API
http://yourdomain.com/io-docs?api=NameOfTheAPI

// Load an API and expand and scroll to a specific method
http://yourdomain.com/io-docs?api=NameOfTheAPI&method=NameOfTheMethod
```

To see it in action, visit [https://stagingcs9.mashery.com/io-docs?api=Test%20API](https://stagingcs9.mashery.com/io-docs?api=Test%20API).


## Global Settings

You can pass options and callbacks into toggleIODocs.js through the `init()` function:

```js
toggleIODocs.init({
    initClass: 'js-toggle-io-docs', // Class that's added to the HTML element on init
    callback: function ( select, val ) {} // Function that runs after content is highlighted
});
```


## Use toggleIODocs events in your own scripts

You can also call the toggle function in your own scripts.

### toggle()

Toggle an IO-Docs API.

```js
toggleIODocs.toggle(
    api, // The value of the API
    method, // The value of the method
    options // Settings (same ones passed in during init)
);

// Examples
toggleIODocs.toggle( 'Some API' );
toggleIODocs.toggle( 'Some API', 'Some Method' );
```

### destroy()

Destroy the current `toggleIODocs.init()`. This is called automatically during the init function to remove any existing initializations.

```js
toggleIODocs.destroy();
```