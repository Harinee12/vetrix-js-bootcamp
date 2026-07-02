// Create the object
let appState = {
    workspaceName: "Vetrix JS Bootcamp",
    activeInterns: 10,
    isProduction: false,
    allowedModules: [
        "Setup Environment",
        "Learn Variables",
        "Write Functions",
        "Login Screen",
        "Dashboard UI"
    ],

    securityConfig: {
        accessLevel: "Admin",
        allowedIpAddresses: [
            "192.168.1.10",
            "192.168.1.20"
        ]
    },

    // Method
    generateSummary: function () {
        return "Workspace: " + this.workspaceName + " has " + this.activeInterns + " active interns.";
    }
};

// Run the method and display the result
console.log(appState.generateSummary());