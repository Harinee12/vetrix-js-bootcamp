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

// Reverse loop
for (let i = workspaceRegistry.length - 1; i >= 0; i--) {
    console.log("[Reverse Priority #" + (i + 1) + "]: " + workspaceRegistry[i]);
}