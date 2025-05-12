
const input = document.getElementById("taskInput");
const btn = document.getElementById("addTaskButton");
const list = document.getElementById("taskList");
console.log(input + btn + list)
function addTask(){
    const taskText = input.value

    if(taskText === ""){
        return;
    }


const newList = document.createElement("li");

newList.textContent = taskText;

list.appendChild(newList);
input.value = "";
newList.addEventListener("click", () => {
    newList.remove()
})
}
btn.addEventListener("click", addTask)