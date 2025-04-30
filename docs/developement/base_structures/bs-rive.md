# bs-button

## Link to Component

[bs-rive](../../../src/app/layouts/base-structures/bs-rive/bs-rive.component.ts)

## Introduction

Rive is the software wich was used to create the images.
The component comes with the following attributes:

| Vaule         | Type     | Status   |
| ------------- | -------- | -------- |
| size          | string   | required |
| src           | string   | required |
| stateMachines | string[] | required |

**Note**: stateMachines allows you to enter more than one value

Currently the component supports these default sizes:

| Size  | Usecase                              |
| ----- | ------------------------------------ |
| L     | Firts Image of a Story               |
| M     | Default for Stories & Questions      |
| S     | For Stories in combination of a Text |
| Topic | For the Hot Topic Card               |
| Hero  | Hero on the Home Screen              |

## Example usage (your-component.component.html)

```html
<app-bs-rive size="M" src="assets/home-page/hero_image.riv" [stateMachines]="['State Machine 1']"></app-bs-rive>
```
