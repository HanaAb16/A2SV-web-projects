const addButton = document.querySelector("#addBtn");
const input = document.querySelector("#taskInput");
const tasklist = document.querySelector("#taskList")
addButton.addEventListener("click" , () => {
    const li = document.createElement("li");
    const textSpan = document.createElement("span");
    
    textSpan.textContent = input.value;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";

    doneBtn.addEventListener("click" , () => {
        li.classList.toggle("done")
    })
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    
    deleteBtn.addEventListener("click" , () => {
        li.remove();
    })
    
    li.appendChild(textSpan)
    li.appendChild(doneBtn)
    li.appendChild(deleteBtn);
    tasklist.appendChild(li);
    input.value = ""

});