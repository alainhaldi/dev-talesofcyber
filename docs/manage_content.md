# Manage Content

## Create a new Topic

### Step 1 - topics.config.ts

First add the new topic to the topics array in [topics.config.json](../src/app/topics.config.ts)

\*Note:

- The topicId has to be **unique**
- The urlId will be show in the url route (/topic/**passwords**)

```ts
export const topics = [
  {
    topicId: "1",
    urlId: "passwords",
  },
];
```

### Step 2 - Base Structure

Add the content of the new topic to the [language.json](../public/i18n/de.json) file

\*Note:

- You will have to add the new topic in **all language files**

Each topic has to follow a ceratin base structure in order to work:

```json
{
  "topic_page": {
    "topics": {
      "topic_1": {
        "infos": {
          "bs_title_topic": "Passwörter",
          "bs_text_description": "Dein digitaler Hausschlüssel"
        },
        "questions": {
          "question_1": {}
          // ... question_n
        }
      }
    }
  }
}
```

### Step 3 - Answers

Each answer can be build from the following components:

#### Heading

```json
{
  "bs_heading_1": "Heading 1"
}
```

#### Text

```json
{
  "bs_text_1": "Text 1"
}
```

#### Bulletpoints

```json
{
  "bs_bullets_1": {
    "bs_text_1": "1",
    "bs_text_2": "2",
    "bs_text_3": "3"
  }
}
```

#### Image

```json
{
  "bs_rive_1": {
    "path": "",
    "height": "",
    "weight": "",
    "StateMachines": {
      "StateMachine_1": ""
    }
  }
}
```

## Add a Topic to Hot Topics

If you want to add a for example topic 54 to the hot topics, you need to add the **topid_id** to the **hot_topics** array in the [topics.component.ts](../src/app/topics.config.ts) file

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
