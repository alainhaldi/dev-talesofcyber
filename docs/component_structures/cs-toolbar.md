# cs-toolbar

## Introduction

A toolbar wich can show a variaty of Icons. By default all Icons are disabled, wich will give you an empty toolbar. You do have the option to enable the following icons:

| Icon      | html attribute        |
| --------- | --------------------- |
| Home Icon | [showHomeIcon]="true" |
| Menu Icon | [showMenuIcon]="true" |

## Example on how to use

If you have a screen where you wanna add a toolbar wich shows a **Menu Icon**, then open the **your-component.component.html** file and add the toolbar:

```html
<app-cs-toolbar [showMenuIcon]="true"></app-cs-toolbar>
```
