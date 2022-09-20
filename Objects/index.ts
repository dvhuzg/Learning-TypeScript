
//Khai bao se dung dau ':' chu khong phai dau '=' =))))

const car : {type:string, model:string, year:number} = {type:'BMW', model:'A123', year:2022};
console.log(car);

//Khai bao kieu Infer thi se dung dau '=' duoc
const car1 = {type:'Ford'};
car1.type = 'Lambor';
car1.type = 2; // error

//khong the khai bao thieu thuoc tinh
const car2: {type:string, model:string, year:number} = {type:'BMW', model:'A123'}; //error




const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = 26; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);

