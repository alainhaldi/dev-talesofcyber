# cs-topic-card

## Link to Component

[cs-topic-card](../../../src/app/layouts/complex-structures/cs-topic-card/cs-topic-card.component.ts)

## Introduction

A card wich displayes a picture, the title and the description of a hot topic. This are the required input values:

| Vaule   | Type   | Status   |
| ------- | ------ | -------- |
| topicId | string | required |
| urlId   | string | required |

## Example usage (your-component.component.html)

```html
<app-cs-topic-card topicId="{{ hot_topic.topicId }}" urlId="{{ hot_topic.urlId }}"></app-cs-topic-card>
```
