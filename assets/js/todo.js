var todoList = {
  displayTodo: function displayTodos() {
    console.log(this.displayTodo);
  }

}

// it should have a function to display todos
function displayTodos() {
  console.log(todos);
}

// it should have a function to add a todo
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

// it should have a function to change a todo
function changeTodo(position, newValue) {
  todo[position] = newValue;
  displayTodos;
}

// it should have a function to delete a todo
function deleteTodo() {

}