# bs-title

## Link to Component

[bs-title](../../../src/app/layouts/base-structures/bs-title/bs-title.component.ts)

## Introduction

A Component wich allows you do display a Title. For a better Structure, make sure you only use **one single h1 element per page**. The component comes with the following attributes, while by default its displaying an h2 element, if wished an h1 can be used:

| Vaule | Type    | html attribute example        |
| ----- | ------- | ----------------------------- |
| title | string  | title="{{ pathToHotTopics }}" |
| isH1  | boolean | [isH1]="true"                 |

\***Note**: The h2 and h1 element will have the **same style**, the difference is only for the better hierarchy

## Example usage (your-component.component.html)

If you have a screen where you wanna add a Title as an h1 element, then open the **your-component.component.html** file and add like:

```html
<app-bs-title title="{{ pathToHotTopics }}" [isH1]="true"></app-bs-title>
```
