# bs-button

## Link to Component

[bs-button](../../../src/app/layouts/base-structures/bs-button/bs-button.component.ts)

## Introduction

Buttons can be small or large and also can have a routerlink.
The component comes with the following attributes:

| Vaule               | Type    | Status   |
| ------------------- | ------- | -------- |
| textAbove           | string  | required |
| text                | string  | required |
| isLarge             | boolean | required |
| activatedRouterlink | boolean | optional |
| customRouterLink    | string  | optional |

**Note**: If a customRouterLink is provided, then activatedRouterLink has to be true in order to work

## Example usage (your-component.component.html)

```html
<app-bs-button text="{{ pathToButtonBackwards() }}" [isLarge]="true" (click)="previousPage()"></app-bs-button>
```
