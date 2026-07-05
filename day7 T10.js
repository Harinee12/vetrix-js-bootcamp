let internTasks = [
    "Setup Environment",
    "Learn Variables",
    "Write Functions"
];

internTasks.push("Practice Arrays");
internTasks.unshift("Complete Orientation");

let vetrixAppFeatures = [
    "Login Screen",
    "Dashboard UI"
];

let workspaceRegistry = internTasks.concat(vetrixAppFeatures);

// Print each task with numbering
for (let i = 0; i < workspaceRegistry.length; i++) {
    console.log("[Task #" + (i + 1) + "]: " + workspaceRegistry[i]);
}