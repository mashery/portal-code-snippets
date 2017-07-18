# toggleSelectByQueryString.js

Toggle a select value by query string key in the URL.

## Getting Started

### 1. Include the script in your Portal.

Add the script under `Manage` > `Portal` > `Portal Settings`. You can either add it as an external script or inline the code.

### 2. Initialize the script.

Call `toggleSelectByQueryString(selector, key)`, passing in the CSS selector for your select field and the query string key to use for it's value.

```html
<script>
	// example URL: http://developer.myportal.com/contact?sandwich=turkey
	toggleSelectByQueryString('#my-sandwich', 'sandwich');
</script>
```

### 3. Append the appropriate query string to your links.

Add your query string and the desired value to any URL that points to the page with your select menu.

```
<a href="http://developer.myportal.com/contact?sandwich=turkey">my fancy link</a>
```
