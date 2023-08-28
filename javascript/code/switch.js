var date = new Date();
var today = date.getDay();
switch (today) {
  case 0:
    console.log("today is sunday");
    break;
  case 1:
    console.log("today is monday");
    break;
  case 2:
    console.log("today is thuesday");
    break;
  case 3:
    console.log("today is wednesday");
    break;
  case 4:
    console.log("today is tharsday");
    break;
  case 5:
    console.log("today is friday");
    break;
  case 6:
    console.log("today is satday");
    break;
}

let amount = 400;
switch (amount) {
  case 100:
    console.log("this prize amount " + amount);
    break;
  case 200:
    console.log("this prize amount " + 200);
    break;
    default:
      console.log("invaild amount");

}
