document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("task-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTasks(task));

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
    renderTasks(newTask)
});

  function renderTasks(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add('completed')
    li.innerHTML = `
        <span>${task.task}</span>
        <button>Delete</button>
    `;
    li.addEventListener('click', (e) => {
        if(e.target.tagName === "BUTTON") return

        task.completed = !task.completed
        li.classList.toggle('completed')
        saveTasks()

    })

    li.querySelector("button").addEventListener('click', (e) => {
        e.stopPropagation()

        tasks = tasks.filter(t => t.id !== task.id)
        li.remove()
        saveTasks()
    })
    todoList.appendChild(li);

    

  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
