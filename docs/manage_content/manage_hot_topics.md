# Manage Hot Topics

## Genral Infos

Hot Topics are displayed on the HomeScreen, eachone has his own topic card. And are managed in [topics.component.ts](../../src/app/topics.config.ts)

## Add Hot Topic

If you want to add a for example topic 54 to the hot topics, you need to copy the **topid object** from the **topics** array to the **hot_topics** array in the file. But make sure you **dont** remove it from the **topics** array

```ts
export const hot_topics = [{ jsonId: "54", urlId: "secret-topic" }];
```

Make sure your jsonId matches with the ID in the **language.json** file

```json
{
  "topics": {
    "topic_54": {}
  }
}
```

!! How to implement the hot topic picture??

## Remove Hot Topic

For removing, you simply have to delete the hot topic from the **hot_topics** array.
