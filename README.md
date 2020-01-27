* *SPEC*: Create a text input form
* *SPEC*: add the text from input form to a task
  - input: "do this task"
  - output: console.log(task) ==> "do this task"
* *SPEC*: add the task to a tasklist
  - input: task1
  - output: taskList {[task1]}
* *SPEC*: add multiple tasks to a tasklist
  - input: task1, task2
  - output: taskList {[task1, task2]}
* *SPEC*: add the single task list object to the page
  - input: "do this task"
  - output: Task list: 1) do this task
* *SPEC*: add all tasks in a task list to page
  - input: "do task 2"
  - output: Task list: 1) do this task 2) do task 2
* *SPEC*: mark task as finished
  - input: finished "do this task"
  - output: Task list 1) *completed* 2) do task 2
* *SPEC*: remove completed tasks with jQuery and update array
  - input: finished "do this task"
  - output: Task list 1) do task 2
* *SPEC*: add completed task to a tasklist of completed tasks
  - input: delete task1
  - output: deletedTaskList {[task1]}
* *SPEC*: add completed tasklist to the page
  - input: delete task1
  - output: Complete: 1) do this task