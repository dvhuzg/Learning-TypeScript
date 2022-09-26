//trich xuat ra tung thuoc tinh cua 1 object

interface Person {
    name:string;
    age:number;
}

function printPersonProperties(person:Person, property:keyof Person){
    console.log(property + ':' + person[property]);
}
let person1 ={
    name:'dohung',
    age:22
}

printPersonProperties(person1,"name");