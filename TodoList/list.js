var todos = ["Buy New Turtle"];

// window.setTimeout(function(){
var input = prompt("What would you like to do?")

while(input !== "quit"){
    //handle input
    if (input === "list"){
        listTodos();
    }else if(input === "new"){
        addTodo();
    } else if(input === "delete"){
        deleteTodo();
    }
 input = prompt("What would you like to do?")
    //ask again for new input
}
console.log("Ok , You quit the app");

// },500);


function listTodos(){
    console.log("*********")
    todos.forEach(function(todo, i){
    console.log(i + ":" + todo);
    });
    console.log("*********")
}

function addTodo(){
    //ask for new todo
    var newTodo = prompt ("Enter new todo");
    //add to todos array
    todos.push(newTodo);
    console.log("added todo");
}

function deleteTodo(){
    var index = prompt("Enter index of todo to delete");
    todos.splice(index,1);
    console.log("Deleted todo!");
}