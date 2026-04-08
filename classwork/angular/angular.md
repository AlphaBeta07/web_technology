# Anugular
Angular is framework.  
React is library.  
React was developed by facebook  

Angular is a type script based content framework developed by google  
It helps us build a *Single Page application(SPA)*  

1. what is *SPA* ?  
=> Where the page fully does not reload when navigation between diff views.  

2. tools used for angular
    1. node.js
    2. npm - node package manager
    3. Ansgular CLI - command line interface

CLI 
- command line interface 
    used for create and manage angular apps

# Install and Run
    install -   npm install -g @angular/cli
    create -    ng new angular-project-1
    run -       ng s 
    run -       ng serve
  
# Files and thier usage
package.json
- list of packages includes dependencies part of production, dev development only for local development

angular.json 
- project configuration file
  
style.css
- global css style

.gitignore
- file or folder execute from version control

tsconfig.json
- typescript configuratio file

index.html
- main file loads angular

app.config.ts
- app config file

main.ps
- entry point of applicaiton

Component
- its a UI block or structure 
- when we create one component 
- generate component : 

    ng g c component-name 
- when we create - 4 files are created : 
    - html
    - css
    - spec.ts
    - ts

