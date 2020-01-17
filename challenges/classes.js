// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

class CuboidMaker{
    constructor(attrs){
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    volume(){
        let value = this.length * this.width * this.height;
        return ` volume: ${value}`
    }
    surfaceArea(){
        let val = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        return ` volume: ${val}`
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  })

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
//Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(cubeAttrs){
        super(cubeAttrs)
    }
    vol(){
        let value = this.length * this.width * this.height;
        return ` volume: ${value}`
    }
    surfArea(){
        let val = 6 *(this.length * this.width );
        return ` volume: ${val}`
    }
}

const cube = new CubeMaker({
    length: 4,
    width: 5,
    height: 5
  })