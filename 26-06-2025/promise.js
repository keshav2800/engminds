fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(data=> {console.log(data)})
.catch(error=>{console.log("this is the error", error)})