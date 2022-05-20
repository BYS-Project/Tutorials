# First React Tutorial
## Setup:
Please, feel free to check the "How to start" section in the React root page [here](../)
## What knowledge will you gain?
### Project Structure
- [App.js](./public/src/components/App.js)
  - Main component that will be inserted into the HTML
- [PrintFunction.js](./public/src/components/PrintFunction.js)
  - custom component                                               
- [index.js](./public/src/index.js)
  - render function (the one that injects the code in inted.html)
- [index.html](./public/src/index.html)
  - html page that will contain all the code
### JSX
Syntax similar to html that will be "converted" into js code (/objects).
```
  // This is JSX
  <div>
      <h1>JSX</h1>
      <p>This is JSX syntax!</p>
  </div>
```
Note: JSX is imported with ```import React from 'react'```
### ReactDOM
Library of React that interacts with the DOM. <br>
```
// JS Syntax
const root = ReactDOM.createRoot(document.getElementById('root'));
// element.render(<JSX>) injects the JSX (javaScript) code into the element
// Note: There must be only one parent in the render()
root.render(
  {// Parent}
  <div>
    <h1> JSX code! </h1>
  </div>
)
```
Imported with ```import ReactDOM from 'react-dom/client' ```
