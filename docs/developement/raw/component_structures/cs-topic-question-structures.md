# cs-topic-question-structures

## Introduction

A header wich displayes the Title, description and the Story button for each question page of a topic. This are the required input values:

| Variables | html attribute      |
| --------- | ------------------- |
| jsonId    | [jsonId]="jsonId()" |

## Example on how to use

If you have a screen where you wanna add a topic question header, then open the **your-component.component.html** file and add like:

```html
<app-cs-topic-question-header [jsonId]="jsonId()"></app-cs-topic-question-header>
```
