// For using states in functions (and not in classes) we need to import 'useState'
import React, {useState} from 'react'

// FUNCTION COMPONENT
function App() {
  // What is the state a react app?
  // It's the set of the component's variables we want to update during the execution of the program

  // Example:
  // How to increment (correctly a counter) -> We must use the State of the application
  // Where 'count' is the variable we want to update and 'setCount' the function that updates it
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={increment}>Increment Counter</button>
    </div>
  );
}

export default App;
