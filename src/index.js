document.addEventListener("DOMContentLoaded", () => {
  // your code here

const submitB = document.getElementById("create-task-form")

const Entry = document.getElementById("new-task-description")

submitB.addEventListener("submit", function (event){
  event.preventDefault()
  const tasks = document.getElementById("tasks")
  const li = document.createElement("li")
    li.innerText = Entry.value
      tasks.appendChild(li)
})

});
