# Translation i18n

## Implementation in typescript

Make sure you import the Translatepipe in **your-component.component.ts** file

```ts
imports: [TranslatePipe],
```

Make sure you use the translate Pipe in **your-component.component.html** file

```html
<h1>{{ pathToHotTopics() | translate }}</h1>
```

Make sure you use the correct path. Example for a path:

```ts
pathToHotTopics = "page.hot_topics";
```

```json
{
  "page": {
    "hot_topics": "Top Themen"
  }
}
```

## How to add a new language

Find the description here [new language](../manage_content/new_language.md)
