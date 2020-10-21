'use strict'
const field = document.querySelector('.field');
const addButton = document.querySelector('.add');
const todoList = document.querySelector('.list');

const createTask = (value) => {
    const task = document.createElement('div');
    task.textContent = value;
// add .task, .unsuccess
    task.classList.add('task', 'unsuccess');
// add checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('status');
    task.appendChild(checkbox);
    //finish add checkbox
    checkbox.addEventListener('click', completeStatus);
    return task;
}

const completeStatus = (event) => {
    const clickedCheckbox = event.target;
    const checkboxParent = clickedCheckbox.parentElement;

    if (!!clickedCheckbox.checked) {
        checkboxParent.classList.remove('unsuccess');
        checkboxParent.classList.add('success');
    } else {
        checkboxParent.classList.remove('success');
        checkboxParent.classList.add('unsuccess');
    }
}

const addTask = () => {
    if (field.value) {
        const newTask = createTask(field.value);
        field.value = '';
        return todoList.appendChild(newTask);
    }
}

addButton.addEventListener('click', addTask);

