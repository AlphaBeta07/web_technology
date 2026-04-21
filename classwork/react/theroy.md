# **React** 
- its a js library developed by *meta* to build a fast and interactive user interfaces so by using js 
- it is a single page application, page does not reload only the changes are made 
- ex - instagram

## **Why we use react?**
- Probs with js:   
    - full page reload   
    - complex dom mainpulation  
    - hard to manage large application
- Updates only required part, uses reuable ocmponents  

## **Virtual DOM**
- react crates a copy of real dom means virtual dom
- when data cheanges react updates virtual dom
- updates only changed part in virtual dom
- gives high performance

## **How to create a project in react ??**
    npx create react react-app-name
or  

    npm create vite @latest project-app 
    
## activity 1
- diff bet angular and react
- which one has more market hipe

## activity 2
- why react library created

# Vite
- fast build tool


## Install dependency
    npm install means 
    
## start server
    npm run dev
## index.html
- render everything 

## jsx
- it means js + xml
- it allows us to write html code in js

## main.jsx
- its a entry point of 

## Rules of jsx
- must return single parent
- use {} for js

## Components is heart of react
functional component in react    

    function Student (){  
        return <h1>This is FC</h1>
    }

## Use component 
    function app (){
        return <> <student> </>
    }

## props
porps means data passed from parent to child 

    function app (){
        return <student fname='ASL'/>
    }
    function student(props){
        return <h2> Name : {props.fname}</h2>
    } 

## activity 3
- what is components and its types
- where we use conmponents in react, with 2 examples

## activity 4
- what is porps
- why we use props 
- types of props with 2 example
