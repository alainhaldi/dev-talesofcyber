# bs-link

## Link to Component

[bs-link](../../../src/app/layouts/base-structures/bs-link/bs-link.component.ts)

## Introduction

Each Link Component can have a Text before and after the Link. This is totally optional and has to be definded in the Json file. The component comes with the following attributes:

| Vaule      | Type   | html attribute example                                |
| ---------- | ------ | ----------------------------------------------------- |
| pathToLink | string | pathToLink="{{ `${localPathToAnswer()}.${obj.key}`}}" |

**Note**: pathToLink refers to the Json Path

## Example usage (your-component.component.html)

```html
<app-bs-link pathToLink="{{ `${localPathToAnswer()}.${obj.key}`}}"></app-bs-link>
```
