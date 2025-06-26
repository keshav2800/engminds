var inputtext = document.getElementById("input");
var addbutton = document.getElementById("add");
var tasklist = document.getElementById("list");

function addTask(){
    var tasktext = inputtext.value.trim();
    if(tasktext == ""){
        alert("Please enter a task");
        return;
    }

    var listItem = document.createElement("li");
    var taskspan = document.createElement("span");
    var deletebutton = document.createElement("button");

    deletebutton.textContent = "delete";
    taskspan.textContent = tasktext;
    listItem.appendChild(taskspan);
    listItem.appendChild(deletebutton);
    tasklist.appendChild(listItem);
    inputtext.value = "";

    deletebutton.addEventListener("click", deleteTask);


}

addbutton.addEventListener("click", addTask);
inputtext.addEventListener("keypress", enterbutton);

function enterbutton(e){
    if(e.key === "Enter"){
        e.preventDefault();
        addTask();
    }
}

function deleteTask(e){
    e.target.parentElement.remove();
}