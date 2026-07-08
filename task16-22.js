// Task 16

const appState = {
  workspaceName: "Vetrix Workspace",
  activeInterns: 5,
  isProduction: false,
  allowedModules: ["HTML", "CSS", "JavaScript"],
};

appState.activeInterns = 10;
appState["deploymentTimestamp"] = new Date().toDateString();

console.log(appState);

// Task 17

appState.securityConfig = {
  accessLevel: "Admin",
  allowedIpAddresses: ["192.168.1.1", "192.168.1.2"],
};

console.log(appState.securityConfig.accessLevel);

// Task 18

appState.generateSummary = function () {
  return `Workspace: ${this.workspaceName}, Active Interns: ${this.activeInterns}`;
};

console.log(appState.generateSummary());

// Task 19

const internRegistry = [
  {
    id: 1,
    name: "Harini",
    assignedRole: "Frontend",
    completedTasksCount: 5,
  },
  {
    id: 2,
    name: "Rahul",
    assignedRole: "Backend",
    completedTasksCount: 4,
  },
  {
    id: 3,
    name: "Anu",
    assignedRole: "Testing",
    completedTasksCount: 3,
  },
];

internRegistry.forEach((intern) => {
  console.log(intern.name);
});

// Task 20

const headerNode = document.getElementById("app-header");
console.log(headerNode);

// Task 21

const statusIndicators = document.querySelectorAll(".status-indicator");

statusIndicators.forEach((item) => {
  item.innerText = "System Ready";
});

// task 22

const wrapper = document.getElementById("wrapper");

wrapper.innerText = "<h1>Welcome</h1>";
wrapper.innerHTML = "<h1>Welcome</h1>";