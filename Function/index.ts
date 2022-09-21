//RETURN TYPE
//co the ep kieu cho gia tri ma ham tra ve

function func_1(): number {
  return new Date().getHours();
}
console.log("Function 1: ", func_1());

//VOID RETURN TYPE
function funct_2(): void {
  console.log("Function 2: Dohung");
}
funct_2();

//Parameters

function funct_3(a:number,b:number) {
    return a*b;
}
console.log("Funtion 3: ",funct_3(2,3));

//Optionals Parameters
//khai bao 1 ham voi 1 hoac nhieu tham so tuy chon co the co hoac khong co gia tri truyen vao
function funct_4(a:number, b:number, c?:number){
    return a+b+(c||0);
}
console.log("Function 4: ", funct_4(2,6));

//DEFAULT PARAMS

//neu chi truyen gia tri tham so a thi mac dinh gia tri tham so b = 10, con neu truyen ca gia tri cho b thi se lay gia tri moi
function funct_5(a:number,b:number = 10 ){
    return a+b;
}
console.log("Function 5: ", funct_5(2));

//REST PARAMETER
//co the truyen han 1 mang lam param
function funct_6(a:number,b:number, ...rest:number[] ){
    return a+b +(rest.reduce((p,c)=> p+c,0));
}
console.log("Function 6: ", funct_6(1,1,1,1,1));
