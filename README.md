# TalesOfCyber

# Project Setup

## Creation

First thing is always the creation of a project itself

```
ng new talesofcyber
```

- Choosen Options: **Sass SCSS** & **No Serverside Rendering**

To see if it worked, try starting to project

```
npm start
```

- See your Webside on **http://localhost:4200**

## GitHub

To safe your Project, create a git repo and connect it with your Angular Project

```
git remote add origin git@github.com:xxxx
```

- Check and update the **.gitignore** File

Commit the changes via **GitHub Desktop**, but never commit to main, instead use:

- **feature-branch_name**
- **bug-branch_name**
- **doc-branch_name**

## Deployment

To deploy your project in the web, create on **Azure** a **Static Web App**

- https://gray-field-0721ca310.6.azurestaticapps.net

### Custom Domain

- Create a domain on **Infomaniak**
- In Azure go to **Custom Domain** and connect an external domain
- In Infomaniak, like the domain via **CNAME**

## Static Code Analysis

### SonarQube

Start the local sonarqube docker container and visit the UI

- http://localhost:9000
