# Create a new Topic

## General Infos

Each topic contains a list of relevant of questions, their answers and a story. Topics have to be written down in **language.json** file and need to follow a certain syntax.
The story

## Step 1 - topics.config.ts

First add the new topic to the topics array in [topics.config.json](../../src/app/topics.config.ts)

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

## Step 2 - Base Structure

Add the content of the new topic to the [language.json](../../public/i18n/de.json) file

- You will have to add the new topic in **all language files**

Each topic has to follow a ceratin base structure in order to work.

```json
{
  "topic_page": {
    "topics": {
      "topic_1": {
        "infos": {
          "bs_title_topic": "",
          "bs_text_description": ""
        },
        "questions": {
          "question_1": {}
        },
        "story": {
          "page_1": {}
        }
      }
    }
  }
}
```

## Step 3 - Available Components

Find here a list of all possible components and their json alias. Its importan, that the json keys always start with these aliases. You can use these components for the answers as well as for the stories.

- !! Find here more informations about the components implementation [xx](xx)

### Title

```json
{
  "bs_title_1": ""
}
```

### Heading

```json
{
  "bs_heading_1": ""
}
```

### Text

```json
{
  "bs_text_1": ""
}
```

### Bulletpoints

```json
{
  "bs_bullets_1": {
    "bs_text_1": "",
    "bs_text_2": "",
    "bs_link_1": {},
    "bs_link_2": {}
  }
}
```

### Link

```json
{
  "bs_link_1": {
    "bs_text_before": "",
    "alias": "haveibeenpwned.com",
    "url": "https://haveibeenpwned.com/",
    "bs_text_after": ""
  }
}
```

### Image

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

!! All components json alias?

## Example Answer

```json
{
  "topic_page": {
    "topics": {
      "topic_1": {
        "infos": {},
        "questions": {
          "question_5": {
            "bs_heading_question": "Wie kann ich mir all diese Passwörter merken?",
            "answer": {
              "bs_heading_1": "Passwortmanager",
              "bs_text_1": "Kannst du alle Telefonnummern deiner Freunde auswendig? Wahrscheinlich nicht und musst du auch nicht! Dasselbe gilt für Passwörter: Die besten sind die, die nur dein Passwortmanager kennt.",
              "bs_heading_2": "Merk-Satz",
              "bs_text_2": "Willst du dir trotzdem mal ein Passwort merken, nutze diese Technik:",
              "bs_bullets_1": {
                "bs_text_1": "Überlege dir einen Satz.",
                "bs_text_2": "Nimm die Anfangsbuchstaben jedes Wortes.",
                "bs_text_3": "Integriere Satzzeichen.",
                "bs_text_4": "Baue, wenn möglich, eine Zahl ein."
              }
            }
          }
        }
      }
    }
  }
}
```

## Example Story Page

!! Example Story Page
