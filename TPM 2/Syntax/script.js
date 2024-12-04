const taskInput = document.getElementById("inputTask");
const addTaskButton = document.getElementById("buttonTask");
const taskList = document.getElementById("taskList");

// add
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("li");

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    taskItem.classList.toggle("completed");
  });

  // Task text
  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;

  // Delete
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "×";
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskLabel);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);

  // Clear input field
  taskInput.value = "";
});
