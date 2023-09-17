// Initialize the task counter
let taskCounter = 0;

// Selecting elements
const AddBtn = document.querySelector(".Add");
const ClearBtn = document.querySelector(".Clear");
const SearchBtn = document.querySelector(".Search");
const AddTaskInput = document.querySelector(".AddtaskInput");
const SearchTaskInput = document.querySelector(".SearchtaskInput");
const tasks = document.querySelector(".tasks");

// Functions
const Addtask = () => {
    let AddTaskInputContent = AddTaskInput.value;

    if (AddTaskInputContent === "") {
        alert("Please add a task");
        return;
    }

    const task = document.createElement("div");
    task.classList.add("task", "border", "d-flex", "justify-content-between", "mb-3");

    const paragraph = document.createElement("p");
    paragraph.classList.add("TaskContent", "p-2");
    paragraph.textContent = AddTaskInputContent;

    task.appendChild(paragraph);

    const span = document.createElement("span");
    span.classList.add("bg-dark", "p-3");
    task.appendChild(span);

    const completeButton = document.createElement("a");
    completeButton.classList.add("btn", "btn-success", "text-white", "mr-2", "Complete");
    completeButton.textContent = "Complete";
    span.appendChild(completeButton);

    const deleteButton = document.createElement("a");
    deleteButton.classList.add("btn", "btn-danger", "text-white", "Delete");
    deleteButton.textContent = "Delete";
    span.appendChild(deleteButton);

    tasks.appendChild(task);
    AddTaskInputContent = "";

    // Increase the task counter and update the display
    taskCounter++;
    document.querySelector(".task-counter").textContent = taskCounter;

    completeButton.addEventListener("click", function () {
        // Mark the task as completed
        task.classList.add("completed");
        completeButton.textContent = "Completed";
        completeButton.classList.remove("btn-success");
        completeButton.classList.add("btn-secondary");
        completeButton.disabled = true;

        // Decrease the task counter when a task is completed
        taskCounter--;
        document.querySelector(".task-counter").textContent = taskCounter;
    });

    deleteButton.addEventListener("click", function () {
        // Decrease the task counter when a task is deleted
        taskCounter--;
        document.querySelector(".task-counter").textContent = taskCounter;

        tasks.removeChild(task);
    });
}

const searchtask = () => {
    const paragraphList = document.querySelectorAll(".TaskContent");

    paragraphList.forEach(text => {
        if (text.textContent.toLowerCase().includes(SearchTaskInput.value.toLowerCase())) {
            text.parentElement.classList.remove("d-none");
        } else {
            text.parentElement.classList.add("d-none");
        }
    });
}

// Event listeners
AddBtn.addEventListener("click", Addtask);

ClearBtn.addEventListener("click", function () {
    tasks.textContent = "";
    taskCounter = 0; // Reset the task counter
    document.querySelector(".task-counter").textContent = taskCounter;
});

SearchBtn.addEventListener("click", searchtask);
