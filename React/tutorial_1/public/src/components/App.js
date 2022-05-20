// Import of JSX
import React from 'react'
// Let's import the button
import PrintFunction from './PrintFunction'

// Function - Body of the page
function App() {
  // We could insert functions / Login of the app before the return section
  //
  //
  return (
    // Parent
    // Using JSX (JavaScript and XML) the following code html-style will be "transformed" in JS code
    <div>
        <h1>Hello World</h1>

        <PrintFunction />
    </div>
    // Now we want to insert a button in the root <div>
    // Check PrintFunction.js
  )
}

// To use this function we must export it
export default App

// Let's take a look at index.js