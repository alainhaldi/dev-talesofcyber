# TalesOfCyber

## Basic Commands

Start in Dev Mode

```bash
npm start
```

Start in Dev Mode and make accessable in local Network

```bash
ng serve --host 0.0.0.0
```

Check Packages for vulnerabilities

```bash
npm audit
```

## Project Setup

Finde here all setps that were taken, when creating the repository

- [ProjectSetup](docs/projectsetup.md)

## Merge Process

Find here all steps that are taken before each merge

- [MergeProcess](docs/mergeprocess.md)

## Component Structures Manual

Component Structures are reusable, complex components like **Toolbar**, **Topic Card**

- [Component Structures](docs/component_structures/component_structures.md)

## Base Structures Manual

Base Structures are reusable, simple components like **Text**, **Title**, **Rive**

- [Base Structures](docs/base_structures/base_structures.md)

## Manage Content

Find here informations about how to add new languages, new topics or hot topics

- [Manage Content](docs/manage_content.md)

## Temp for developement

title = input.required<string>();

### Improvments

- Not Found Component wich links back to Home Screen, with hero saying something

```json
"page_3": {
            "bs_rive_1": {
              "size": "M",
              "src": "assets/home-page/hero_image.riv",
              "stateMachines": {
                "StateMachine_1": "State Machine 1"
              }
            },
            "bs_text_1": "",
            "bs_rive_text_1": {
              "src": "assets/home-page/hero_image.riv",
              "text": ""
            },
            "bs_text_2": ""
          },
```

```json

"bs_term_1": {
              "bs_text_before": "",
              "term": "",
              "description": "...Beschreibung Folgt...",
              "bs_text_after": " "
            }

```
