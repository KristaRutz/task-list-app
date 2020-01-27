SPEC: Create a text input form
SPEC: add the text from input form to the page
  input: "do this task"
  output: Task list: 1) do this task
SPEC: add a second task
  input: "do task 2"
  output: Task list: 1) do this task 2) do task 2

  
SPEC: mark task as finished
  input: finished "do this task"
  output: Task list 1) *completed* 2) do task 2
SPEC: remove completed tasks with jQuery and update array
  input: finished "do this task"
  output: Task list 1) do task 2