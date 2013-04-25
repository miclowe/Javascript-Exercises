function favoritesList(things) {

  function convertToOrdinal(num) {
    var numStr = num.toString();
    var last = numStr.charAt(numStr.length-1);
    var ordNum = "";
    if (numStr.length === 1) {
        switch(num) {
        case 1:
            ordNum = num + "st";
            break;
        case 2:
            ordNum = num + "nd";
            break;
        case 3:
            ordNum = num + "rd";
            break;
        default:
          ordNum = num + "th";
        }
    } else {
      if (numStr.charAt(numStr.length-2) === "1") {
          ordNum = num + "th";
      } else if (last === "1") {
          ordNum = num + "st";
      } else if (last === "2") {
          ordNum = num + "nd";
      } else if (last === "3") {
          return num + "rd";
      } else {
          ordNum = num + "th";
      }  
    }
    return ordNum;
  }

  for(var i = 0; i < activities.length; i += 1) {
    console.log("My " + convertToOrdinal(i + 1) + " favorite thing to do is " + activities[i] + ".")
  }
}

var activities = ["eat chocolate chip cookies", "watch Mickey Mouse", "go running", "play golf", "eat chocolate chip cookies", "watch Mickey Mouse", "go running", "play golf", "eat chocolate chip cookies", "watch Mickey Mouse", "go running", "play golf"];
favoritesList(activities);