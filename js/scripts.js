// Business Logic for TaskList -------------
function TaskList() {
  this.tasks = [];
  this.currentId = 0;
}

TaskList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

TaskList.prototype.deleteTask = function(id) {
  console.log("you tried to delete " + id);
  delete this.tasks[id-1];
    // for (var i = 0; i < this.tasks.length; i++) {
    //   if (this.tasks[i].id == id){
    //     console.log("FOUND ID MATCH for 1")
    //     delete this.tasks[i];
        return true;
      }
    //}
//}

TaskList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

TaskList.prototype.toString = function() {
  var string = "Current List: ";
  var j = 1;
  for (var i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i]) {
      string = string + `<input type="checkbox" name="deleteOption" value="${i+1}"> ${j}) ${this.tasks[i].description} `;
      j ++;
      // string = string + " " + (i+1) + ")" + this.tasks[i].description + " "
    }
  }
  return string;
}

function Task(description) {
  this.description = description;
}

var laundry = new Task("wash dirty clothes");

// User Interface Logic ----------------------
$(document).ready(function() {
  userTaskList = new TaskList;

  $("#inputTask").submit(function(event) {
    event.preventDefault();
    console.log("input submitted")
    $("#currentTaskList").text("")
    var newTask = new Task($("#newTask").val());
    userTaskList.addTask(newTask);
    $("#currentTaskList").append(userTaskList.toString());
  });

  $("#deleteForm").submit(function(event) {
    event.preventDefault();
    console.log("delete button was pressed.");

    var userResponses = [];
    $("input:checkbox[name=deleteOption]:checked").each(function(){
      var completeTasks = $(this).val();
      userResponses.push(completeTasks);
      console.log(completeTasks);
      console.log(userResponses);
    })

    for (var i = 0; i < userResponses.length; i++){
      userTaskList.deleteTask(parseInt(userResponses[i]));
    }
    console.log(userTaskList);
    $("#currentTaskList").text("")
    $("#currentTaskList").append(userTaskList.toString());
  });
})



