# Manage Content

## Hot Topic

### Add Topic to Hot Topics

If you want to add a topic to the hot topics, you need to add the **topid_id** to the **hot_topics_ids** array in the [topics.component.ts](../src/app/topics.config.ts) file

```json
{
  "topic_page": {
    "global": {},
    "topics": {
      "topic_1": {}
    }
  }
}
```

The id in the language.json file should be the same as the jsonId

```ts
export const topics = [
  {
    jsonId: "1",
    urlId: "passwords",
  },
];
```
