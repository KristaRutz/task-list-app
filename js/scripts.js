// Business Logic for TaskList -------------
function TaskList() {
  this.tasks = [];
  this.currentId = 0;
}

TaskList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

TaskList.prototype.selectTask = function(id) {
  for (var i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        return this.tasks[i];
      }
    }
  }
  return false;
}

TaskList.prototype.deleteTask = function(id) {

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

TaskList.prototype.toText = function() {
  var string = ``;
  var j = 1;
  for (var i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i]) {
      string = string + `<li><input type="checkbox" name="deleteOption" value="${i+1}"> ${this.tasks[i].description}</li>`;
      j ++;
      // string = string + " " + (i+1) + ")" + this.tasks[i].description + " "
    }
  }
  return string + "</ol>";
}

function Task(description) {
  this.description = description;
}

var laundry = new Task("wash dirty clothes");

// User Interface Logic ----------------------
$(document).ready(function() {
  userTaskList = new TaskList;
  userCompleteList = new TaskList;

  $("#inputTask").submit(function(event) {
    event.preventDefault();
    $("#deleteForm").show();
    $("#currentItems").text("")
    var newTask = new Task($("#newTask").val());
    userTaskList.addTask(newTask);
    $("#currentItems").append(userTaskList.toText());
  });

  $("#deleteForm").submit(function(event) {
    event.preventDefault();

    var userResponses = [];
    $("input:checkbox[name=deleteOption]:checked").each(function(){
      var completeTasks = $(this).val();
      userResponses.push(completeTasks);
      //console.log(completeTasks);
      //console.log(userResponses);
    })

    for (var i = 0; i < userResponses.length; i++){
      var deletedId = (parseInt(userResponses[i]));
      var deletedTask = userTaskList.selectTask(deletedId);
      console.log(deletedId, deletedTask);
      userCompleteList.addTask(deletedTask);
    }

    for (var i = 0; i < userResponses.length; i++){
      userTaskList.deleteTask(parseInt(userResponses[i]));
    }

    console.log(userTaskList);
    console.log(userCompleteList);
    $("#currentItems").text("")
    $("#currentItems").append(userTaskList.toText());
    $("#completeItems").append(userCompleteList.toText());
  });
})



