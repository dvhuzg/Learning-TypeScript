// Tuples la 1 kieu array duoc khai bao voi so luong cho truoc va moi chi muc duoc dinh san 1 kieu du lieu.
// nen su dung voi readonly 
let arr: readonly [number, string, boolean];
arr=  [5, 'dohung',true];


// named tuples
let arr1:[x:number, y:string] = [1,'dohung']



// Destructuring Tuples

let arr2:[number, number]  = [1,2]
let [x,y] = arr2;
console.log(x,y);







