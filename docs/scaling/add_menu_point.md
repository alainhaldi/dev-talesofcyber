# Add a new Menu Point

## Page Component

First, create a new Page Component at:

```
src/app/pages
```

Make sure you follow the correct naming rule:

```
name-page
```

## Json array

Open the Json Language file and add the new menu point

```json
{
  "menu_page": {
    "bs_title_new_point": "new_point"
  }
}
```

## MenuItems Array

Open the file [menu-page.component.ts](../../src/app/pages/menu-page/menu-page.component.ts) and add your new Menu Point to the list

```ts
menuItems = [{ link: "/url-path", label: "menu_page.bs_title_new_point" }];
```

\***Note**: label is your referenz to the Json language file

## Route

Open the file [app.routes.ts](../../src/app/app.routes.ts) and add a new **lazy route**
