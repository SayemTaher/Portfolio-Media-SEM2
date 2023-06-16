// Get elements from the DOM
const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const timeInput = document.getElementById("time-input");
const prioritySelect = document.getElementById("priority-select");
const todoList = document.getElementById("todo-list");

// Retrieve todos from local storage, or initialize an empty array
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {

  const task = taskInput.value;
  const date = dateInput.value;
  const time = timeInput.value;
  const priority = prioritySelect.value;

  // Create a new todo object
  const todo = {
    id: Date.now(),
    task,
    date,
    time,
    priority,
    completed: false,
  };
  
  todos.push(todo);

  taskInput.value = "";
  dateInput.value = "";
  timeInput.value = "";
  prioritySelect.value = "normal";

  saveTodos();
  renderTodoList();
}

// Function to delete a todo
function deleteTodoItem(id) {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex !== -1) {
    
    const confirmDelete = confirm("Are you sure you want to delete this task?");

    if (confirmDelete) {
      todos.splice(todoIndex, 1);

      saveTodos();
      renderTodoList();
    }
  }
}

// Function to render the todo list
function renderTodoList() {
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const listItem = document.createElement("div");
    listItem.classList.add("task-card");
    listItem.classList.add(`${todo.priority}-priority`);

    const taskName = document.createElement("div");
    taskName.classList.add("task-name");
    taskName.innerText = todo.task;

    const dateTime = document.createElement("div");
    dateTime.classList.add("date-time");
    dateTime.innerHTML = `${todo.date} at ${todo.time}`;

    const priority = document.createElement("div");
    priority.classList.add("priority");
    priority.innerText = todo.priority;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteTodoItem(todo.id);
    });

    listItem.appendChild(taskName);
    listItem.appendChild(dateTime);
    listItem.appendChild(priority);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
  }
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo();
});

// Initial rendering of the todo list
renderTodoList();
