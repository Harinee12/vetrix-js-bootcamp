let birthYear = Number(prompt("Enter your birth year:"));

if (birthYear > 2026 || birthYear < 1900) {
    alert("Invalid birth year entered!");
} else {
    let age = 2026 - birthYear;

    if (age >= 18) {
        alert("You are eligible to vote!");
        console.log("You are eligible to vote!");
    } else {
        alert("You are not old enough to vote yet.");
        console.log("You are not old enough to vote yet.");
    }
} 
console.log("Testing push");