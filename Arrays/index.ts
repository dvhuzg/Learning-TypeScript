// Khai bao mang phai kem theo ca kieu du lieu cua mang, va khai bao ten mang phai co ky tu 's' cuoi cung
const strs: string[] = [];
strs.push('dohung');

console.log(strs);


// Readonly
// co tac dung de ngan khong cho thay doi du lieu mang

let names:readonly number[]=  []
names.push('123'); //error

// Type Inference
// co the khai bao mang nhu trong JS, luc nay TS se tu suy luan ra kieu du lieu mang

let inputs = [2,3,4];
inputs.push(5);
console.log(inputs);

