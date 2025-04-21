# Translation i18n

## How to use

Make sure you import the Translatepipe in **your-component.component.ts** file

```ts
imports: [TranslatePipe],
```

Make sure you use the translate Pipe in **your-component.component.html** file

```html
<h1>{{ "page.hot_topics" | translate }}</h1>
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

Create a new json file (language.json):

```bash
public/i18n/es.json
```

Add the new language to the **availableLanguages** String Array in the **language.service.ts** file.
