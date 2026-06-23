let USERVALUE = prompt(
  "ENTER THE DAY EXAMPLE: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
);
let day = USERVALUE.trim().toLowerCase();

let message = "";

switch (day) {
  case "monday":
    message = "Today is Monday!!!!!";
    break;

  case "tuesday":
    message = "Today is Tuesday!!!!!";
    break;

  case "wednesday":
    message = "Today is Wednesday!!!!!";
    break;

  case "thursday":
    message = "Today is Thursday!!!!!";
    break;

  case "friday":
    message = "Today is Friday!!!!!";
    break;

  case "saturday":
    message = "Today is Saturday!!!!!";
    break;

  case "sunday":
    message = "Today is Sunday!!!!!";
    break;

  default:
    message = "Enter a valid day!!!!!";
}

document.getElementById("result").innerHTML = message;
