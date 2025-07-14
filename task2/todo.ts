interface Task{
    text: string;
    id: number;
    isDone: boolean;
}

let tasks: Task[] = [];
let count = 0

function addTask(taskText: string): void{
    const newTask: Task = {
        text: taskText ,
        id: ++count ,
        isDone: false
    };
    tasks.push(newTask)
}

function removeTask(id: number): void{
    const newTasks = tasks.filter(task => (task.id !== id))
    tasks = newTasks
}

function displayTasks(): void{
    for (const task of tasks){
        console.log(`${task.id}.${task.text} - ${task.isDone ? "done" : "not done"}`);
    }
}

addTask('Working out');
addTask('Grosary shopping');
addTask('Eating breakfast');
addTask('Learning Typescript');
removeTask(2);
displayTasks();