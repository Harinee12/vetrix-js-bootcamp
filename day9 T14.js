// Master array
let workspaceRegistry = [
  "Setup Environment",
  "Learn Variables",
  "Write Functions",
  "Login Screen",
  "Dashboard UI"
];

// Filter strings that have more than 15 characters
let longTasks = workspaceRegistry.filter(task => task.length > 15);

// Display the original array
console.log("Original Array:");
console.log(workspaceRegistry);

// Display the filtered array
console.log("Filtered Array:");
console.log(longTasks);