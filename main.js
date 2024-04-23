function addTask() {
  const taskList = document.getElementById("task-list");
  const taskInput = document.getElementById("new-task");
  const task = taskInput.value.trim();

  if (task !== "") {
    const listItem = document.createElement("li");
    listItem.className = "flex items-center justify-between p-2 hover:bg-gray-100";

    const taskText = document.createElement("span");
    taskText.textContent = task;
    taskText.className = "task-text";

    const buttonsContainer = document.createElement("div");

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.className = "text-red-500 hover:text-red-700";
    deleteButton.onclick = function () {
      listItem.remove();
    };

    const checkButton = document.createElement("input");
    checkButton.type = "checkbox";
    checkButton.className = "mr-2";
    checkButton.onchange = function () {
      if (this.checked) {
        taskText.style.textDecoration = "line-through";
      } else {
        taskText.style.textDecoration = "none";
      }
    };

    buttonsContainer.appendChild(checkButton);
    buttonsContainer.appendChild(deleteButton);

    listItem.appendChild(taskText);
    listItem.appendChild(buttonsContainer);

    taskList.appendChild(listItem);

    taskInput.value = ""; // Clear input after adding
  }
}
