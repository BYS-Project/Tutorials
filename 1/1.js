// Tutorial - Lession 01
count = 0
let counterElement = document.getElementById("counter")
counterElement.textContent = count
let savedElement = document.getElementById("savedItems")
function increment() {
    count++;
    console.log("New count: " + count)
    counterElement.textContent = count
}
function save() {
    console.log("Count Saved: " + count)
    let separator = " - "
    if(savedElement.innerText == null || savedElement.innerText.length == 0){
        separator = ""
    }
    savedElement.textContent =  savedElement.textContent + separator + count 

    count = 0
    counterElement.textContent = count
}
