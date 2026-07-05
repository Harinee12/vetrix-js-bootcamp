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

    // Nested object
    securityConfig: {
        accessLevel: "Admin",
        allowedIpAddresses: [
            "192.168.1.10",
            "192.168.1.20"
        ]
    }
};

// Log only the nested accessLevel
console.log(appState.securityConfig.accessLevel);