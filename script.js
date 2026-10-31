const button = document.getElementById("addButton");
const input = document.getElementById("textInput");
const taskList = document.getElementById("taskList");

let tasks = [
    { id: 1, title: "Learn JavaScript", completed: true },
    { id: 2, title: "Practice DOM", completed: false },
    { id: 3, title: "Build Task Manager", completed: true }
];
let currentFilter = "all";

function addTask(){
    const taskValue = input.value; 

    if(taskValue.trim() === ""){
        return;
    }

    const task = {
        id: Date.now(),
        title: taskValue,
        completed: false
    };
    
    tasks.push(task);

    input.value = "";
    renderTasks();
}

function filterTasks(tasks, status){
    if(status === "all"){
        return tasks;
    }else if(status === "completed"){
        return tasks.filter(task => task.completed);
    }else if(status === "pending"){
        return tasks.filter(task => !task.completed);
    }
}

function renderTasks(){
    console.log('renderTasks');
    taskList.innerHTML = "";
 
    const ft = filterTasks(tasks, currentFilter);

    ft.forEach(
        task =>{
            const li = document.createElement("li");
            li.textContent = task.title;
            taskList.appendChild(li);
        }
    );
}

document.getElementById("allBtn").addEventListener("click", ()=>{
    currentFilter = "all";
    renderTasks();
});

document.getElementById("completedBtn").addEventListener("click",()=>{
    currentFilter = "completed";
    renderTasks();
});

document.getElementById("pendingBtn").addEventListener("click",()=>{
    currentFilter = "pending";
    renderTasks();
});


button.addEventListener("click", addTask);

input.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        addTask();
    }
});

renderTasks();