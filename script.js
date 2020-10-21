'use strict'
const field = document.querySelector('.field');
const addButton = document.querySelector('.add');
const todoList = document.querySelector('.list');

const createTask = (value) => {
    const task = document.createElement('div');
    task.textContent = value;
    return task;
}

const addTask = () => {
    if (field.value) {
        const newTask = createTask(field.value);
        field.value = '';
        return todoList.appendChild(newTask);
    }
}

addButton.addEventListener('click', addTask);

