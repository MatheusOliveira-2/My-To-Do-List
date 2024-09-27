const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const FullList = document.querySelector(".list-task")

let myItemList = []

function addNewTask() {
    myItemList.push({
        task:input.value,
        completed: false
    })

    input.value = ''

    showTasks()
}

function showTasks() {

    let newLi = ''

    myItemList.forEach((item, index) => {
        newLi = newLi + `

            <li class="task ${item.completed && "done"}">
                <img src="./img/check.png" alt="check-na-tarefa" onclick="completeTask(${index})">
                <p>${item.task}</p>
                <img src="./img/delete.png" alt="delete-a-tarefa" onclick="deleteItem(${index})">
            </li>
        `
    })

    FullList.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify (myItemList))

}

function completeTask(index){
    myItemList[index].completed = !myItemList[index].completed 

    showTasks()

}

function deleteItem(index){
    myItemList.splice(index, 1)

    showTasks()
}

function reloadTasks(){
    const LocalStorageTasks = localStorage.getItem('list')

    if (LocalStorageTasks){

    myItemList = JSON.parse(LocalStorageTasks)
    }
        
    showTasks()
}

reloadTasks()
button.addEventListener("click", addNewTask)