# fixIntegratedDashboardLinks.js

When integrated Controle Center sign on is enabled in MashDash (typically for clients using SSO), links to recover a lost password or username, as well as the header navigation, stop working (they use a relative URL structure that's incorrect on those pages).

This script fixes that.

## Getting Started

### 1. Include the script in your Portal.

Add the script under `Manage` > `Portal` > `Portal Settings`. You can either add it as an external script or inline the code.

### 2. Initialize the script.

Call `fixIntegratedDashboardLinks(find, replace)`, where `find` is the root URL for your dashboard, and `replace` is the root URL from your Portal front end.

```js
/**
 * Fix broken links on integrated Control Center login
 * @param  {String} find    The root URL for your Control Center instance
 * @param  {String} replace The root URL for your Portal front end
 */
fixIntegratedDashboardLinks(find, replace);

// Example
fixIntegratedDashboardLinks('https://mycompany.admin.mashery.com', 'https://developer.mycompany.com');
```
