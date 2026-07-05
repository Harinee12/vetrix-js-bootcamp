// Create the object
let appState = {
    workspaceName: "Vetrix JS Bootcamp",
    activeInterns: 5,
    isProduction: false,
    allowedModules: [
        "Setup Environment",
        "Learn Variables",
        "Write Functions",
        "Login Screen",
        "Dashboard UI"
    ]
};

// Change activeInterns using dot notation
appState.activeInterns = 10;

// Add deploymentTimestamp using bracket notation
appState["deploymentTimestamp"] = new Date().toDateString();

// Display the updated object
console.log(appState);