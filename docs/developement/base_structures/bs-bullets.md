# bs-bullets

## Link to Component

[bs-bullets](../../../src/app/layouts/base-structures/bs-bullets/bs-bullets.component.ts)

## Introduction

A Component wich allows you do display a Bulletpoint list. The component comes with the following attributes:

| Vaule         | Type   | html attribute example                                    |
| ------------- | ------ | --------------------------------------------------------- |
| pathToBullets | string | pathToBullets="{{ currentPathToPage() + '.' + obj.key }}" |

**Note**: pathToBullets refers to the Json Path

## Example usage (your-component.component.html)

```html
<app-bs-bullets pathToBullets="{{ currentPathToPage() + '.' + obj.key }}"></app-bs-bullets>
```
