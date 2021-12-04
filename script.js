closeSidebar();
function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
}

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("date").innerHTML = "Happy  " + day;
var d = new Date(); // Full current date and time
// var n = d.getFullYear() // Just the year (2021)
document.getElementById("update").innerHTML = d;
//document.getElementsByClassName("year").innerHTML = n;

// Display error message
function showErrors() {
  document.getElementById('errors').style.display = "block";
}

