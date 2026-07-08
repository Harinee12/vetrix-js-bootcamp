let birthyear = Number(prompt("enter your birth year:"));
if (birthyear >= 2026 || birthyear <= 1900) {
  alert("Invalid birth year. Please enter a valid year.");
} else {
  let age = 2026 - birthyear;
  if (age >= 18) {
    alert("You are eligible to vote.");
  } else {
    alert("You are not eligible to vote.");
  }
}
