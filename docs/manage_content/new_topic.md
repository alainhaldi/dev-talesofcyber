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

- Find here more informations about the base components implementation [Base Structures](../developement/base_structures.md)

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

### Term

```json
{
  "bs_term_1": {
    "bs_text_before": "",
    "term": "",
    "description": "",
    "bs_text_after": ""
  }
}
```

### Rive (Image)

```json
{
  "bs_rive_1": {
    "size": "",
    "src": "",
    "stateMachines": {
      "StateMachine_1": ""
    }
  }
}
```

### Rive Text

```json
{
  "bs_rive_text_1": {
    "src": "",
    "text": ""
  }
}
```

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

```json
{
  "topic_page": {
    "story": {
      "page_10": {
        "bs_rive_1": {
          "size": "M",
          "src": "assets/home-page/hero_image.riv",
          "stateMachines": {
            "StateMachine_1": "State Machine 1"
          }
        },
        "bs_text_1": "Noch immer unter Schock setzt sich Maria an den Tisch und beginnt, ein Passwort nach dem anderen zu ändern.",
        "bs_rive_text_1": {
          "src": "assets/home-page/hero_image.riv",
          "text": "Ohjee das wird eine lange Nacht..."
        },
        "bs_term_1": {
          "bs_text_before": "Damit Maria sich die vielen neuen Passwörter merken kann, nutzt sie einen ",
          "term": "Passwortmanager",
          "description": "...Beschreibung Folgt...",
          "bs_text_after": ""
        },
        "bs_term_2": {
          "bs_text_before": "Zusätzlich aktiviert sie überall die ",
          "term": "Multi-Faktor-Authentifizierung",
          "description": "...Beschreibung Folgt...",
          "bs_text_after": ", um bestmöglich geschützt zu sein."
        }
      }
    }
  }
}
```
