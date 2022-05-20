# First React Tutorial
## What knowledge will you gain?
### State
Introduction to states in ***function components***.
1) Import of useState ```import {useState} from 'react'```
2) Declaring constants/variables with the following syntax:
    ```
    const [count, setCount] = useState(0)
    ```
    ***count*** is the state variable <br>
    ***setCount*** is the function called to update the count variable <br>
    ***zero*** in useState(***0***) is the starting value of count <br>
3) Function called to update the state of the application:
    ```
    const increment = () => {
      setCount(count + 1)
    }
    ```
    ***increment()*** is the function called from a button (for example) to update count <br>
    ***setCount()*** updates the state of the application
4) Example of how to call the code written before.
    ```
    <button onClick={increment}>Increment Counter</button>
    ```
<br><br>
You can find the component described in [here](./src/components/App.js)
