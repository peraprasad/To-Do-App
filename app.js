var listOfActivities = [];
var input = document.getElementById("input")
var toDoList = document.getElementById("todolist")
document.getElementById("button").onclick = click
function click(){
    listOfActivities.push(input.value)
    console.log(listOfActivities)
    input.value = ""
    showList()
}
function showList(){
    toDoList.innerHTML = "";
    listOfActivities.forEach(function(current_value, index){
        toDoList.innerHTML+=("<li>" + current_value + "<a onclick = 'editItem(" + index + ")'>Edit</a>"+"<a onclick = 'deleteItem(" + index + ")'>&times | </a></li>")
    })
}

function editItem(index){
    var newValue = prompt("Please insert your value");
    listOfActivities.splice(index,1,newValue);
    showList()
}
function deleteItem(index){
    listOfActivities.splice(index,1);
    showList()
}