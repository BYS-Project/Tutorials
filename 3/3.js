// Use "const" by default, otherwise use "let" (just for clarity purposes)
const inputButton = document.getElementById("inputButton")
const saveTabButton = document.getElementById("saveTabButton")
const deleteAllButton = document.getElementById("deleteAllButton")
const inputElement = document.getElementById("inputElement")
const listElement = document.getElementById("listElement")

let savedItems = []
const fromLocalStorage = JSON.parse(localStorage.getItem("savedItems"))
if(fromLocalStorage){
    savedItems = fromLocalStorage
    renderItems()
}

inputButton.addEventListener("click", function() {
    const value = inputElement.value
    addItem(value)
})
saveTabButton.addEventListener("click", function() {
    // It works only as a chrome extension
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        addItem(tabs[0].url)
    })
})
deleteAllButton.addEventListener("dblclick", function() {
    savedItems = []
    localStorage.clear()
    renderItems()
})

function renderItems(){
    let finalHtml = ""
    for(let i = 0; i < savedItems.length; i++){
        let prefix = ""
        if(!savedItems[i].includes("http")){
            prefix = "https://"
        }
        finalHtml += "<li><a href='" + prefix + savedItems[i] + "' target='_blank'>" + savedItems[i] + "</a></li>"
    }
    listElement.innerHTML = finalHtml
}
function addItem(value){
    if(value != "" && !savedItems.includes(value)){
        savedItems.push(value)
        localStorage.setItem("savedItems", JSON.stringify(savedItems))
        renderItems()
    }  
}