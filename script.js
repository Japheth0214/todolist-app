let tasks = []; // Array to store tasks

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        id: tasks.length + 1,
        name: taskName,
        completed: false
    };

    tasks.push(task);
    displayTasks();
    taskInput.value = ""; // Clear input field
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear previous tasks

    tasks.forEach(task => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            displayTasks();
        });

        const label = document.createElement("label");
        label.textContent = task.name;

        if (task.completed) {
            label.classList.add("completed");
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        deleteButton.classList.add("delete-button"); // Add delete-button class
        deleteButton.addEventListener("click", () => deleteTask(task.id)); // Call deleteTask function

        // Add margin to the label
        label.style.marginRight = "50px";

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Function to delete a task
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    displayTasks();
}
