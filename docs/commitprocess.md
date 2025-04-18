# Commit Process

## Static Code Analysis - SonarQube

Start the local sonarqube docker container and visit the UI

- http://localhost:9000

Generate a test coverage

```
ng test --code-coverage
```

Then run the SonarQube analysis

```
npx sonarqube-scanner
```

## GitHub Branches

Commit the changes via **GitHub Desktop**, but **never** commit to **main**, instead use:

- **feature-branch_name**
- **bug-branch_name**
- **doc-branch_name**
