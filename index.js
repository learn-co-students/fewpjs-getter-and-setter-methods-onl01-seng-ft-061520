// use Math.PI 

class Circle {
  constructor (radius) {
    this.radius = radius
  }

get diameter() {
  return 2 * this.radius 
}

get circumference() {
  return 2 * Math.PI * this.radius
}

get area() {
  return Math.PI * (this.radius * this.radius)
}

set diameter(input){
  this.radius = input / 2 
}

set circumference(input){
  this.radius = input / (2 * Math.PI) 
}



}