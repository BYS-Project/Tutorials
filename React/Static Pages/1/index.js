// WATCH OUT! You must use an HTTP server to run the code.
// My suggestion: XAMPP @ https://www.apachefriends.org/it/index.html

// Importing REACT we have access to ReactDOM
                // What we want to insert   // DOM Node | Query Selector
ReactDOM.render(<h2>Hello From React!</h2>, document.getElementById("root"))
// JSX = JavaScript XML -> New sintax that makes React code more declarative instead of imperative
// - instead of class we use className
// - we cannot place two or more siblings with ReactDOM.render we can only print a root element
// What React creates with JSX is plain JavaScript

const page = (
    <div>
        <h1 className="title">Hello There, this is a const in React</h1>
        <p className="paragraph">This is a samble paragraph</p>
    </div>
)
ReactDOM.render(page, document.getElementById("root"))