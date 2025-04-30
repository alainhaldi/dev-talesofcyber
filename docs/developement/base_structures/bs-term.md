# bs-term

## Link to Component

[bs-term](../../../src/app/layouts/base-structures/bs-term/bs-term.component.ts)

## Introduction

Terms are primarly used in Stories whenever its needed to explain a certain term. They can be in middle of a text thats why there is teh option for text before and after the term.
The component comes with the following attributes:

| Vaule       | Type   | Status   |
| ----------- | ------ | -------- |
| text_before | string | optional |
| text_after  | string | optional |
| term        | string | required |
| description | string | required |

## Example usage (your-component.component.html)

```html
<app-bs-term text_before="{{ obj.value.bs_text_before }}" text_after="{{ obj.value.bs_text_after }}" term="{{ obj.value.term }}" description="{{ obj.value.description }}"></app-bs-term>
```
