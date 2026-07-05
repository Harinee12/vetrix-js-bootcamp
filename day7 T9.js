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

console.log(workspaceRegistry);

if (workspaceRegistry.includes("Dashboard UI")) {
    console.log("Feature is queued for development!");
}