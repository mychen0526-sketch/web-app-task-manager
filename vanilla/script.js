const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter-btn");
const totalCount = document.getElementById("totalCount");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

let tasks = [];
let currentFilter = "all";

function updateStats() {
    const total = tasks.length;

    const completed = tasks.filter(function (task) {
        return task.completed === true;
    }).length;

    const pending = tasks.filter(function (task) {
        return task.completed === false;
    }).length;

    totalCount.textContent = `共 ${total} 項`;
    pendingCount.textContent = `未完成 ${pending} 項`;
    completedCount.textContent = `已完成 ${completed} 項`;
}

function renderTasks() {
    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "pending") {
        filteredTasks = tasks.filter(function (task) {
            return task.completed === false;
        });
    }

    if (currentFilter === "completed") {
        filteredTasks = tasks.filter(function (task) {
            return task.completed === true;
        });
    }

    filteredTasks.forEach(function (task) {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked;

            renderTasks();
            updateStats();
        });

        const taskText = document.createElement("span");
        taskText.textContent = task.text;
        taskText.className = "task-text";

        if (task.completed) {
            taskText.style.textDecoration = "line-through";
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "刪除";

        deleteBtn.addEventListener("click", function () {
            tasks = tasks.filter(function (item) {
                return item.id !== task.id;
            });

            renderTasks();
            updateStats();
        });

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("請輸入任務名稱");
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);

    renderTasks();
    updateStats();

    taskInput.value = "";
});

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        currentFilter = button.dataset.filter;
        renderTasks();
    });
});

renderTasks();
updateStats();
