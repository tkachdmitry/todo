'use strict'
//
// TIMER
//
let deadLine = 1500;
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const startBtn = document.querySelector('.timer-start-btn');
const stopBtn = document.querySelector('.timer-stop-btn');
let myInterval = -1;
const plusZero = (number) => {
    if (number <= 9) {
        return '0' + number;
    } else {
        return number;
    }
};

function resetInterval() {
    if (deadLine < 0) {
        minutes.textContent = '00';
        seconds.textContent = '00';
        stopTimer();
    }
}

const startTimer = () => {
    if (myInterval == -1) {
        startBtn.innerHTML = 'PAUSE';

        myInterval = setInterval(function () {
            deadLine--;
            const deadLineInWork = deadLine;
            const min = Math.floor(deadLineInWork / 60);
            const sec = Math.floor(deadLineInWork % 60);

            minutes.textContent = plusZero(min);
            seconds.innerHTML = plusZero(sec);
            resetInterval();
        }, 1000);
    } else {
        startBtn.innerHTML = 'START';
        clearInterval(myInterval);
        myInterval = -1;

        const deadLineInWork = deadLine;
        const min = Math.floor(deadLineInWork / 60);
        const sec = Math.floor(deadLineInWork % 60);

        minutes.textContent = plusZero(min);
        seconds.innerHTML = plusZero(sec);
        resetInterval();
    }
};

function stopTimer() {
    startBtn.innerHTML = 'START';
    clearInterval(myInterval);
    myInterval = -1;
    deadLine = 1500;
    minutes.textContent = '25';
    seconds.innerHTML = '00';
    resetInterval();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

//
// ToDo
//
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
