// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(stats){
//   this.length = stats.length,
//   this.width = stats.width, 
//   this.height = stats.height
// }

// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function() {
//   return  2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }

class CuboidMaker {
  constructor(attr) {
    this.length = attr.length,
    this.width = attr.width,
    this.height = attr.height
  }
  volume() {
    console.log('from classes.js:');
    return this.length * this.width * this.height;
  }
  surfaceArea(){
    return  2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
};

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class Cube extends CuboidMaker {
  constructor(cubeSides) {
    super(cubeSides);
    this.side = cubeSides.side
  }
  cubeVolume() {
    return `The volume is ${Math.pow(this.side, 3)}.`
  }
  cubeSurface() {
    return `The surface area is ${6 * Math.pow(this.side, 2)}.`
  }
}

const cube1 = new Cube ({
  side: 4
})

console.log(cube1.cubeVolume());
console.log(cube1.cubeSurface());