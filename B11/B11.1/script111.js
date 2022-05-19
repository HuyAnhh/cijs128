let todolist= [];

let input = document.querySelector("#input");
let button = document.querySelector("#button");
let  ul = document.querySelector("#todoList");

button.onclick = function () {
  todolist = [...todolist, input.value];
  input.value= "";
  renderTodolist(todolist);
}

const renderTodolist = (arrTodo) => {
  ul.innerHTML = ""
  for (let i = 0; i < arrTodo.length; i++) {
    let li = document.createElement("li");
    li.innerText = arrTodo[i];
    ul.appendChild(li)
  }
}
