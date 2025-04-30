# Project Setup

## Creation

First thing is always the creation of a project itself

```bash
ng new talesofcyber
```

- Choosen Options: **Sass SCSS** & **No Serverside Rendering**

To see if it worked, try starting to project

```bash
npm start
```

- See your Webside on **http://localhost:4200**

## GitHub

To safe your Project, create a git repo and connect it with your Angular Project

```bash
git remote add origin git@github.com:xxxx
```

- Check and update the **.gitignore** File

## Deployment

To deploy your project in the web, create on **Azure** a **Static Web App**

- https://gray-field-0721ca310.6.azurestaticapps.net

Get a custom domain

- Create a domain on **Infomaniak**
- In Azure go to **Custom Domain** and connect an external domain
- In Infomaniak, like the domain via **CNAME**

## Static Code Analysis - SonarQube

### SonarQube

Create the local docker container

```bash
docker run -d --name sonarqube -p 9000:9000 sonarqube
```

Login to the [UI](http://localhost:9000) and create a **UserToken**

### Angular Project

Install the package

```bash
npm install --save-dev sonarqube-scanner
```

Create and configure the **sonar-project.properties** file

- Run the tests like described in [CommitProcess](commitprocess.md)

## Logging

Change the [environment variable](../src/environments/environment.prod.ts) to **false** inorder to see the logs

Implementing the logger in your component:

```ts
constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logger.log(`-> Logging something`);
  }
```

## Styling & Components

To make use of the existing [Angular Material Components](https://material.angular.io/components/categories), you can install it with

```bash
ng add @angular/material
```

For easier handling, you can use [Google Icons](https://fonts.google.com/icons) and [Google Fonts](https://fonts.google.com)

## Rive

You can install the Rive package with:

```bash
npm install @rive-app/canvas
```

Make sure in your **angular.json** file you have the following lines (2 places):

```json
"assets": [
              {
                "glob": "**/*",
                "input": "public"
              },
              {
                "glob": "**/*",
                "input": "src/assets",
                "output": "assets"
              }
            ],
```

Find more information on the [Offical Rive Website](https://rive.app/docs/getting-started/introduction)

## Translation i18n

Install the package:

```bash
npm install @ngx-translate/core @ngx-translate/http-loader
```

Create a Language Service at:

```bash
src/app/core/language.service.ts
```

Update the **app.config.ts** file and create a language file at:

```bash
public/i18n/de.json
```

Make sure the **assets** folder is add in your **angular.json** file

Finally, make sure you inject the service in your **app.component.ts** file, to activate it once the project gets started:

```ts
constructor(private languageService: LanguageService) {}
```

Note: For more detailed instructions on how to add languages, read [translation](translation.md)
