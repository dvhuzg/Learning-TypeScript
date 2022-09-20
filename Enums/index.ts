enum CardinalDirections {
    North = 1, //mac dinh thi enum se khoi tao mang tu gia tri = 0, ta co the chinh lai gia tri dau tien =1 tuy y, gia tri se tu dong tang len
    East,
    South,
    West
  }

let currentDirections  = CardinalDirections.East;
console.log(currentDirections);


//Hoac co the gan cho no thu tu bat ky, luc nay stt se khong tu dong tang len
enum CardinalDirections_1 {
    North = 10, 
    East = 12,
    South= 9,
    West = 20
  }



// cung nhu cai tren nhung day la String
  enum CardinalDirections_2 {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  // logs "North"
  console.log(CardinalDirections.North);
  // logs "West"
  console.log(CardinalDirections.West);