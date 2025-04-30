# Add a new Language

## Translation Support

As support for translating, you can use the webside [i18next](https://translate.i18next.com) but make sure you manually check the file

## Json File

Create a new json file (language.json) at:

```bash
public/i18n
```

## Language Service

Add the new language to the **availableLanguages** String Array at [language.service.ts](../../src/app/core/language.service.ts)

```ts
private readonly availableLanguages: string[] = ['de', 'en'];
```
