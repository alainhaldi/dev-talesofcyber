# bs-rive

## Introduction

A Component wich allows you do display a Rive Project. It comes with the following required attributes:

| Vaule         | html attribute example                |
| ------------- | ------------------------------------- |
| width         | width="390"                           |
| height        | height="270"                          |
| src           | src="assets/home-page/hero_image.riv" |
| stateMachines | [stateMachines]="['State Machine 1']" |

\***Note**: stateMachines allows you to enter more than one value

## Example on how to use

If you have a screen where you wanna add a Rive Project, then open the **your-component.component.html** file and add like:

```html
<app-bs-rive width="390" height="270" src="assets/home-page/hero_image.riv" [stateMachines]="['State Machine 1']"></app-bs-rive>
```
