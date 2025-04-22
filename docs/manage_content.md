# Manage Content

## Hot Topic

### Add Topic to Hot Topics

If you want to add a topic to the hot topics, you first need to restructure the **language.json** file

```bash
public/i18n/language.json
```

There you need to move the topic (example: topic_54) from **all_topics** to **hot_topics**:

```json
{
  "topic_page": {
    "global": {},
    "topics": {
      "hot_topics": {
        "topic_54": {}
      }
    },
    "all_topics": {}
  }
}
```

Afterwards, you need to update the **hot_topics_id** array in [home-page.component.ts](../src/app/pages/home-page/home-page.component.ts)

```ts
hot_topics_ids: string[] = [
    'topic_54',
    '...'
  ];
```
