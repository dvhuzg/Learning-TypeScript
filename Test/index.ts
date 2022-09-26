class Product {
  id: number;
  name: string;

  constructor(_id: number, _name: string) {
    this.id = _id;
    this.name = _name;
  }

  get Pro_id() {
    return this.id;
  }

  set Pro_id(value: number) {
    this.id = value;
  }

  get Pro_name() {
    return this.name;
  }

  set Pro_name(value: string) {
    this.name = value;
  }
}

class Pro_full extends Product {
  category: string;
  type: string;
  constructor(_id: number, _name: string, category: string, type: string) {
    super(_id, _name);
  }
  get Pro_category() {
    return this.category;
  }

  set Pro_category(value: string) {
    this.category = value;
  }

  get Pro_type() {
    return this.type;
  }

  set Pro_type(value: string) {
    this.type = value;
  }
}
let a = new Pro_full(123, "dohung", "12", "23");

// const obj_pro: Pro_full = {
//   category:'hihi',
//   type:'hehe',
//   id:1,
//   name:'Dohung',

// }
a.Pro_id = 1;
a.Pro_name = "dohung";
a.Pro_category = "helo";
a.Pro_type = "lohe";

// a.delete('name');

// const b: Omit<Pro_full, "id"> = {
//   category: "hihi",
//   type: "hehe",
//   name: "Dohung",
// };
console.log(a.Pro_name);


// console.log(b);
