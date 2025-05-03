# Improvements

## Manual

- Find all Open Docs Task when searching for **!!**
- How to add Stories/Questions -> all supported components

## Bugs

- Translation -> term, img-text, button components
- Story -> If 2 Rive-Text Components, the seccond dosent gt removed when nextPag() -> only Safari issue, Brave works (when zoom in safari, it dissapears)

## Restructuring

- Json File name only bs_component when dynamically generated.
- Routing of menu points -> back to menu not homescreen
- Include the cs-external-card directly in the external link page since only needed there
- Create a new Custom Dialog Component without Angular material
- Question Dialog, use button component instead of new button
- Custom Progressbar with rounded corners
- Instead of paths, variables and co, pass down to the bs components the whole json object. All json extraction logic should be in the bs component
- Improve Button Component - only 2 button (with/without Routing) -> Size configure only with css

## Features

- Not Found Component wich links back to Home Screen, with hero saying something
- Read StateMachine from Json
- Story can have multiple ends -> phishing
- Support more than 1 custom button at once -> cs_topic_story_component
- Languages as dropdown in menu
