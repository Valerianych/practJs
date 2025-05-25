const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")

let task = []
const tasksString = localStorage.getItem("tasks")
const tasksConst = JSON.parse(tasksString)
console.log(tasksConst) 

if (tasksConst) {
    task = tasksConst
    task.forEach((taskItem) => {
        renderTask(taskItem)
    })
}

addTaskBtn.addEventListener("click", () => {
    const taskItem = taskInput.value.trim()
    if (taskItem === "") return

    task.push(taskItem)
    localStorage.setItem("tasks", JSON.stringify(task))
    renderTask(taskItem)
    taskInput.value = ""
})

function renderTask(taskItem) {
    const taskSpis = document.createElement("li")
    const btnDel = document.createElement("button")

    taskSpis.textContent = taskItem
    btnDel.textContent = "Удалить"

    taskList.appendChild(taskSpis)
    taskSpis.appendChild(btnDel)

    btnDel.addEventListener("click", (event) => {
        event.stopPropagation()
        const index = task.indexOf(taskItem)
        if (index !== -1) {
            task.splice(index, 1)
            localStorage.setItem("tasks", JSON.stringify(task))
        }
        taskSpis.remove()
    })

    taskSpis.addEventListener("click", () => {
        taskSpis.classList.toggle("throughLine")
    })
}
