import React from 'react'

function PrintFunction() {
    let clicked = false
    const print = () => {
      if(!clicked)
        document.getElementById('helloThere').innerText = 'Hello There!'
      else
        document.getElementById('helloThere').innerText = ''
      clicked = !clicked
    }

    return (
        <div>
            <button onClick={print}>Click Here!</button>
            <p id='helloThere'></p>
        </div>
    )
}

export default PrintFunction