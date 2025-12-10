document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach(task => renderTasks(task))

  addTaskButton.addEventListener("click", () => {
    const inputData = todoInput.value.trim();
    if (inputData === "") return;

    const newTask = {
      id: Date.now(),
      task: inputData,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    todoInput.value = "";
    console.log(tasks);
  });

  function renderTasks(task) {
    console.log(task);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
