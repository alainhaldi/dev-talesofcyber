# cs-topic-card

## Introduction

A card wich displayes a picture, the title and the description of a hot topic. This are the required input values:

| Variables   | html attribute                       |
| ----------- | ------------------------------------ |
| topicJsonId | topicJsonId="{{ hot_topic.jsonId }}" |
| topicUrlId  | topicUrlId="{{ hot_topic.urlId }}"   |

## Example on how to use

If you have a screen where you wanna add a topic card, then open the **your-component.component.html** file and add like:

```html
<app-cs-topic-card topicJsonId="{{ hot_topic.jsonId }}" topicUrlId="{{ hot_topic.urlId }}"></app-cs-topic-card>
```
