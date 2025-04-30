# Work with Json Files

## Get Object

Create an array wich should store your json objects

```ts
cardsJsonObjects: {
  key: string;
  value: any;
}
[] = [];
```

Create a methode wich need an pathToJsonObject and then loads all children into the array

```ts
getCardsFromJson(jsonPath: string) {
    const jsonObject = getNestedValue(deJson, jsonPath);
    Object.entries(jsonObject).forEach(([key, value]) => {
      this.cardsJsonObjects.push({ key, value });
    });
  }
```

## Add additional Value to Object

Adding a new value type could be helpful for easier differentiation.

```ts
this.answerArray = Object.entries(answer).map(([key, value]) => {
  const type = key.startsWith("bs_heading") ? "heading" : key.startsWith("bs_text") ? "text" : key.startsWith("bs_bullets") ? "bullets" : key.startsWith("bs_rive") ? "rive" : key.startsWith("bs_link") ? "link" : "unknown";

  return { key, type, value };
});
```

## Work with Objects

Once the objects are loaded, its possible to loop them as well as access their values or children

```ts
@for(obj of cardsJsonObjects; track obj.key){
  <app-cs-external-card
    name="{{ obj.value.bs_heading_name_1 }}"
    logoName="{{ obj.value.name_logo_file }}"
    description="{{ obj.value.bs_text_description_1 }}"
    pathToLink="{{ jsonPath + '.' + obj.key + '.bs_link_1' }}"
  ></app-cs-external-card>
  }
```
