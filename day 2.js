let birthYear = Number(prompt("Enter your birth year:"));

if (birthYear < 1900 || birthYear > 2026) {
    alert("Invalid birth year!");
} else {
    let age = 2026 - birthYear;

    if (age >= 18) {
        alert("You are eligible to vote!");
    } else {
        alert("You are not old enough to vote yet.");
    }
}