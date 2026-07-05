// Create an array of objects
let internRegistry = [
    {
        id: 1,
        name: "Aathira",
        assignedRole: "Frontend Intern",
        completedTasksCount: 18
    },
    {
        id: 2,
        name: "Rahul",
        assignedRole: "Backend Intern",
        completedTasksCount: 15
    },
    {
        id: 3,
        name: "Priya",
        assignedRole: "UI Designer",
        completedTasksCount: 20
    }
];

// Loop through the array and print only the names
for (let i = 0; i < internRegistry.length; i++) {
    console.log(internRegistry[i].name);
}