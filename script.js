document.addEventListener("DOMContentLoaded", function() {
  fetchThenRenderTasks();
});
//////////////////////////////
const baseURL = "http://localhost:3000/tasks/";
//////////////////////////////
const tasksCollection = document.getElementById("tasksCollection");
//////////////////////////////
function fetchTasks() {
  return fetch(baseURL).then(response => response.json());
}
//////////////////////////////
function renderTasks(json) {
  json.forEach(function(task) {
    tasksCollection.appendChild(makeTaskNote(task));
  });
}
//////////////////////////////
function fetchThenRenderTasks() {
  fetchTasks().then(renderTasks);
}
//////////////////////////////
function makeTaskNote(task) {
  const div = document.createElement("div");
  div.className = "card";
  div.dataset.id = task.id;
  div.addEventListener("click", makeTaskCompleted);

  if (task.priority === "Low") {
    div.id = "low";
  }
  if (task.priority === "Medium") {
    div.id = "medium";
  }
  if (task.priority === "High") {
    div.id = "high";
  }

  const p = document.createElement("p");
  p.innerText = `${task.item}`;
  div.appendChild(p);

  const button = document.createElement("button");
  button.className = "delete-btn";
  button.name = "delete";
  button.innerText = "x";
  div.appendChild(button);
  return div;
}
//////////////////////////////
const taskForm = document.querySelector(".add-task-form");
//////////////////////////////
taskForm.addEventListener("submit", function getNewTask(event) {
  event.preventDefault();
  task = {
    item: event.target[0].value,
    priority: event.target[1].value
  };
  tasksCollection.appendChild(makeTaskNote(task));
});
//////////////////////////////
function makeTaskCompleted(e) {
  console.log(e);
  if (e.target.id === "completed") {
  }
  // if (e.target.id === "completed") {
  //   e.target.removeAttribute("id");
  // } else {
  //   e.target.id = "completed";
  // }
}
//////////////////////////////

//////////////////////////////

//////////////////////////////

//////////////////////////////

//////////////////////////////

//////////////////////////////
