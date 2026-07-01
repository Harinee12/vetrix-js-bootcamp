let workspaceRegistry = [
  "Setup Environment",
  "Learn Variables",
  "Write Functions",
  "Login Screen",
  "Dashboard UI",
  "Settings Page",
];
const longTasks = workspaceRegistry.filter((task) => task.length > 15);

console.log("Original Array:", workspaceRegistry);
console.log("Filtered Array:", longTasks);
