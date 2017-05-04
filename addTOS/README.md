# addTOS.js

Add a link to custom Terms of Service on the member registration page (while leaving the Mashery TOS link intact).

## Getting Started

### 1. Include the script in your Portal.

Add the script under `Manage` > `Portal` > `Portal Settings`. You can either add it as an external script or inline the code.

### 2. Initialize the script.

Call `addTOS(newTOS)` with your custom terms of service language.

```js
/**
 * @param {string} newTOS  The new Terms of Service language
 */
addTOS(newTOS);

// Example
addTOS('<a href="/our-tos">the ACME Corp Terms of Service</a>');
```