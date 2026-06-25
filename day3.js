let day = prompt("Enter a day:");

day = day.toLowerCase();

switch (day) {
  case "monday":
    alert("Happy Monday!");
    break;

  case "friday":
    alert("It's Friday! Enjoy!");
    break;

  case "sunday":
    alert("Relax, it's Sunday!");
    break;

  default:
    alert("Please enter a valid day.");
}