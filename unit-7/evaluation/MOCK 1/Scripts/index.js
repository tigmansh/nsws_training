const form = document.getElementById("form");

let taskList = JSON.parse(localStorage.getItem("task-list")) || [];

form.addEventListener("submit", data);

function data(e) {
  e.preventDefault();

  let obj = {
    taskname: form.name.value,
    description: form.desc.value,
    startDate: form.start.value,
    endDate: form.end.value,
    priority: form.priority.value,
  };

  taskList.push(obj);
  localStorage.setItem("task-list", JSON.stringify(taskList));
}
