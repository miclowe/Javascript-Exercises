// function calc_area(a, b, c) {

//   perimeter = (a + b + c)/2;
//   area = Math.sqrt(perimeter*((perimeter-a)*(perimeter-b)*(perimeter-c)));
//   return area;
// }

// var a = parseInt(prompt("Enter length of side 1"), 10);
// var b = parseInt(prompt("Enter length of side 2"), 10);
// var c = parseInt(prompt("Enter length of side 3"), 10);

// console.log(calc_area(a, b, c));

var triangle = {
  sideA: 3, 
  sideB: 4, 
  sideC: 5, 
  calc_area: function(){
    var perimeter = (this.sideA + this.sideB + this.sideC)/2;
    var area =  Math.sqrt(perimeter*((perimeter-this.sideA)*(perimeter-this.sideB)*(perimeter-this.sideC)));
    return area;
  }}

console.log(triangle.calc_area())
