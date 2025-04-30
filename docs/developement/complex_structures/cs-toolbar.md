# cs-toolbar

## Link to Component

[cs-toolbar](../../../src/app/layouts/complex-structures/cs-toolbar/cs-toolbar.component.ts)

## Introduction

A toolbar wich can show a variaty of Icons. By default all Icons are disabled, wich will give you an empty toolbar. You do have the option to enable the following icons:

| Vaule         | Type    | Status   |
| ------------- | ------- | -------- |
| showHomeIcon  | boolean | optional |
| showBackIcon  | boolean | optional |
| showLanguages | boolean | optional |
| showMenuIcon  | boolean | optional |
| showCloseIcon | boolean | optional |

## Example usage (your-component.component.html)

```html
<app-cs-toolbar [showMenuIcon]="true"></app-cs-toolbar>
```
