//dung 'as' de ep kieu nhanh nhat cho gia tri cua bien.

const casting:unknown ='hello';
console.log((casting as string).length);

//su dung cho chinh xac, vi du ep kieu 1 so thanh string, muon in ra do dai thi se khong duoc vi gia tri cua bien la 1 so, ma 1 so thi khong co thuoc tinh length.

const casting_num:unknown = 4;
console.log((casting_num as string).length); //undefined 




//co the dung <> thay cho as

let oke:unknown = 'helllllo';
console.log((<string>oke).length);



//ep kieu cua ep kieu, muc dich la ngan ts nem ra cac loi ve kieu du lieu
let casting_force = 'hello'
console.log(((casting_force as unknown) as string).length);
