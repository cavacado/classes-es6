// class Shape {
//   constructor(x,y) {
//       this.x = x;
//       this.y = y;
//     };
//   area() { return this.x * this.y };
//   perimeter() { return 2 * this.x + 2 * this.y };
//   scaleSize(scale) {
//     this.x = this.x * scale;
//     this.y = this.y * scale;
//   }
// }

function Shape(x,y){
  this.x = x;
  this.y = y;
  this.area = function() { return this.x * this.y };
  this.perimeter = function() { return 2 * this.x + 2 * this.y };
  this.scaleSize = function(scale){
    this.x = this.x * scale;
    this.y = this.y * scale;
  }
}

var rect = new Shape(2,3);
console.log(rect.area());
