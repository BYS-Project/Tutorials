// Where JSX syntax is defined
// Note: After version 17 and above no longer to import React for making JSX working
import React from "react"
// Import of ReactDOM
import ReactDOM from "react-dom"

const page = (
    <div>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps!</li>
        </ul>
    </div>
)
 
ReactDOM.render(page, document.getElementById("root"))