function favoritesList(things) {

  function convertToOrdinal(num) {
    var numStr = num.toString();
    var last = numStr.charAt(numStr.length-1);
    if (numStr.length === 1) {
        switch(num) {
            case 1:
                return num + "st";
                break;
            case 2:
                return num + "nd";
                break;
            case 3:
                return num + "rd";
                break;
            default:
              return num + "th";
        }
    } else {
      if (numStr.charAt(numStr.length-2) === "1") {
          return num + "th";
      } else if (last === "1") {
          return num + "st";
      } else if (last === "2") {
          return num + "nd";
      } else if (last === "3") {
          return num + "rd";
      } else {
          return num + "th";
      }  
    }
  }

  for(var i = 0; i < activities.length; i += 1) {
    console.log("My " + convertToOrdinal(i + 1) + " favorite thing to do is " + activities[i] + ".")
  }
}

var activities = ["eat chocolate chip cookies", "watch Mickey Mouse", "go running", "play golf", "eat chocolate chip cookies", "watch Mickey Mouse", "go running", "play golf", "eat chocolate chip cookies", "watch Mickey Mouse", "go running", "play golf"];
favoritesList(activities);