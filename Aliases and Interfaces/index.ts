// Aliases
//co the dung voi mang, object
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
    year:CarYear,
    type:CarType,
    model:CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const cars: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
console.log(cars);


// Interfaces
// chi dung voi object
interface info {
    name: string,
    age:number
}

const dohung: info = {
    name: 'dohung',
    age:22
}

console.log(dohung);



//Extended 
//Them thuoc tinh vao object
interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };