const todoInput = document.getElementById('todo-input')
const addTaskButton = document.getElementById('add-task-btn')
const todoList = document.getElementById('todo-list')

let tasks = []

addTaskButton.addEventListener('click', () => {
    const inputData = todoInput.value.trim()
    if(inputData === "") return

    const newTask = {
        id: Date.now(),
        task: inputData,
        completed: false
    }

    tasks.push(newTask)
    console.log(tasks)
})
