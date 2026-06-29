// Create the array
let internTasks = [
  "Submit Report",
  "Setup Environment",
  "Learn Variables",
  "Write Functions",
  "Practice Arrays"
];

// Show the original array
console.log("Original Tasks:", [...internTasks]);

// Remove the first task
internTasks.shift();

// Remove the last task
internTasks.pop();

// Show the remaining tasks
console.log("Remaining Tasks:", internTasks);