"use strict";
let tasks = [];
let count = 0;
function addTask(taskText) {
    const newTask = {
        text: taskText,
        id: ++count,
        isDone: false
    };
    tasks.push(newTask);
}
function removeTask(id) {
    const newTasks = tasks.filter(task => (task.id !== id));
    tasks = newTasks;
}
function displayTasks() {
    for (const task of tasks) {
        console.log(`${task.id}.${task.text} - ${task.isDone ? "done" : "not done"}`);
    }
}
addTask('Working out');
addTask('Grosary shopping');
addTask('Eating breakfast');
addTask('Learning Typescript');
removeTask(2);
displayTasks();
