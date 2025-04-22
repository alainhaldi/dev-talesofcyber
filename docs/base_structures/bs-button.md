# bs-button

## Introduction

A Component wich allows you do display a Button in size Small or size Large. The component comes with the following attributes:

| Vaule   | html attribute example       |
| ------- | ---------------------------- |
| text    | text="{{ pathToHotTopics }}" |
| isLarge | [isLarge]="false"            |

## Example on how to use

If you have a screen where you wanna add a small Button, then open the **your-component.component.html** file and add like:

```html
<app-bs-button text="{{ pathToButtonAllTopics }}" [isLarge]="false"></app-bs-button>
```

For a cleaner html file, add all Paths to the i18n json values in the **your-component.component.ts** file:

```ts
pathToButtonAllTopics = "home_page.bs_button_all_topics";
```

In the **languge.json** file, refer to the button like (bs_button_custom_name):

```json
{
  "home_page": {
    "bs_button_all_topics": "Alle Themen"
  }
}
```
