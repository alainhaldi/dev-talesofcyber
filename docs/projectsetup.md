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

```
docker run -d --name sonarqube -p 9000:9000 sonarqube
```

Login to the [UI](http://localhost:9000) and create a **UserToken**

### Angular Project

Install the package

```
npm install --save-dev sonarqube-scanner
```

Create and configure the **sonar-project.properties** file

- Run the tests like described in [CommitProcess](commitprocess.md)
