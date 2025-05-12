const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")

const task = []

addTaskBtn.addEventListener("click", () =>{
    let taskItem = taskInput.value
    task.push(taskItem)
    console.log(task)

    const taskSpis = document.createElement("li")
    const btnDel = document.createElement("button")

    taskSpis.textContent = taskItem
    btnDel.textContent = "Удалить"

    taskList.appendChild(taskSpis)
    taskSpis.appendChild(btnDel)

    btnDel.addEventListener("click", (event) =>{
        event.stopPropagation()
        const index = task.indexOf(taskItem)
        if(index !== -1){
            task.splice(index, 1)
            
        }
        taskSpis.remove()
        console.log(task)
    } )
    taskSpis.addEventListener("click", ()=>{
        taskSpis.classList.toggle("throughLine")
    })
})