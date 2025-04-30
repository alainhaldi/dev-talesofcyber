# cs-toolbar

## Link to Component

[cs-external-card](../../../src/app/layouts/complex-structures/cs-external-card/cs-external-card.component.ts)

## Introduction

A card wich contains all information about the external info page.

| Vaule       | Type   | Status   |
| ----------- | ------ | -------- |
| name        | string | required |
| logoName    | string | required |
| description | string | required |
| pathToLink  | string | required |

## Example usage (your-component.component.html)

```html
<app-cs-external-card name="{{ obj.value.bs_heading_name_1 }}" logoName="{{ obj.value.name_logo_file }}" description="{{ obj.value.bs_text_description_1 }}" pathToLink="{{ jsonPath + '.' + obj.key + '.bs_link_1' }}"></app-cs-external-card>
```
