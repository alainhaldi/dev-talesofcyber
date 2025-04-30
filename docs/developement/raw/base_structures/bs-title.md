# bs-title

## Introduction

A Component wich allows you do display a Title. For a better Structure, make sure you only use **one single h1 element per page**. The component comes with the following attributes, while by default its displaying an h2 element, if wished an h1 can be used:

| Vaule | html attribute example        |
| ----- | ----------------------------- |
| title | title="{{ pathToHotTopics }}" |
| isH1  | [isH1]="true"                 |

\***Note**: The h2 and h1 element will have the **same style**, the difference is only for the better hierarchy

## Example on how to use

If you have a screen where you wanna add a Title as an h1 element, then open the **your-component.component.html** file and add like:

```html
<app-bs-title title="{{ pathToHotTopics }}" [isH1]="true"></app-bs-title>
```

For a cleaner html file, add all Paths to the i18n json values in the **your-component.component.ts** file:

```ts
pathToHotTopics = "bs_title_hot_topics";
```

In the **languge.json** file, refer to the title like (bs_title_custom_name):

```json
{
  "bs_title_hot_topics": "Top Themen"
}
```
