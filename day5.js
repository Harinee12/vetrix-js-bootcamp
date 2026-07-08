
let studentTasks = [
    "Setup Environment",
    "Learn Variables",
    "Write Functions"
];
console.log("Before adding tasks:");
console.log(studentTasks);
studentTasks.push("Learn Arrays");
studentTasks.unshift("Complete Assignment");
console.log("After adding tasks:");
console.log(studentTasks);

console.log("Total tasks:", studentTasks.length);
console.log("Third task:", studentTasks[2]);