class Person {
    name: string;
    age:number
}

const person = new Person();
person.name = 'dohung';
person.age = 22

// console.log(person);



class Phone {
    private readonly name:string;
    public constructor (name:string){
        this.name = name;
    };

    public getName():string{
        return this.name;
    }
}

const phone = new Phone('iP');
console.log(phone.getName());
