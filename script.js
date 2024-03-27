const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask() {
  if (inputBox.value === "") {
    alert("You have to write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (removeTask) {
    if (removeTask.target.tagName === "LI") {
      removeTask.target.classList.toggle("checked");
      saveData();
    } else {
      if (removeTask.target.tagName === "SPAN") {
        removeTask.target.parentElement.remove();
        saveData();
      }
    }
  },
  false
);
function saveData() {
  localStorage.setItem("Data", listContainer.innerHTML);
}
function dispTask(){
    listContainer.innerHTML = localStorage.getItem("Data")

}
dispTask();