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

for (let i = 0; i < workspaceRegistry.length; i++) {

    if (workspaceRegistry[i].includes("Learn")) {
        continue;
    }

    if (workspaceRegistry[i] === "Dashboard UI") {
        console.log("Found target!");
        break;
    }

    console.log(workspaceRegistry[i]);
}