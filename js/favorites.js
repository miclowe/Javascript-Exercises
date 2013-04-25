function list(things) {

  function convertToOrdinal(num) {
    if(10 < num && num < 14) {
      return num + "th";
    } else {
      switch(num % 10) {
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
    }

  }


  for(var i = 0; i < favorites.length; i += 1) {
    console.log("My " + convertToOrdinal(i + 1) + " favorite thing to do is " + favorites[i] + ".")
  }
}

var favorites = ["eat chocolate chip cookies", "watch Mickey Mouse", "play golf", "go running"];
list(favorites);