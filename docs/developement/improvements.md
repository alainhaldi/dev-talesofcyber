# Improvements

## Manual

- Find all Open Docs Task when searching for **!!**
- How to add Stories/Questions -> all supported components

## Prios

- Add Descriptions of Terms
- Check all Story Content
- Add correct Images

## Bugs

- Translation -> term, img-text, button components
- Story -> If 2 Rive-Text Components, the seccond dosent gt removed when nextPag() -> only Safari issue, Brave works (when zoom in safari, it dissapears)

## Design

- App bar while refresh, shouldnt get pulled down
- Storyies -> Bullet of Secret Tipp & Last Story Page Title

## Restructuring

- Json File name only bs_component when dynamically generated otherwise just title, text
- Json File only minimum keys, if not needed dont add empty strings, or whole paths
- Routing of menu points -> back to menu not homescreen
- Include the cs-external-card directly in the external link page since only needed there
- Create a new Custom Dialog Component without Angular material
- Question Dialog, use button component instead of new button
- Custom Progressbar with rounded corners
- Instead of paths, variables and co, pass down to the bs components the whole json object. All json extraction logic should be in the bs component
- Improve Button Component - only 2 button (with/without Routing) -> Size configure only with css
- Make a Export Methode wich creates Arrays from JSOn Objects so there are not 2 implementations needed anymore (cs question dialog & cs story)
- Add Model Interface for each bs component and replace the type in cs story page component with this model

## Features

- Not Found Component wich links back to Home Screen, with hero saying something
- Read StateMachine from Json
- Story can have multiple ends -> phishing
- Support more than 1 custom button at once -> cs_topic_story_component
- Languages as dropdown in menu
- Images should dynamically change the size according to available space in (dvh)
