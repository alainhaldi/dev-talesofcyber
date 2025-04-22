# bs-text

## Introduction

A Component wich allows you do display a Text. The component comes with the following attributes:

| Vaule | html attribute example    |
| ----- | ------------------------- |
| text  | text="{{ pathToText() }}" |

## Example on how to use

If you have a screen where you wanna add a Text, then open the **your-component.component.html** file and add like:

```html
<app-bs-text text="{{ pathToText() }}"></app-bs-text>
```

For a cleaner html file, add all Paths to the i18n json values in the **your-component.component.ts** file:

```ts
pathToHotTopics = "bs_text_description";
```

In the **languge.json** file, refer to the title like (bs_title_custom_name):

```json
{
  "bs_text_description": "Dein digitaler Hausschlüssel"
}
```
