# Manage Content

## Hot Topic

### Add Topic to Hot Topics

If you want to add a for example topic 54 to the hot topics, you need to add the **topid_ids** to the **hot_topics** array in the [topics.component.ts](../src/app/topics.config.ts) file

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
