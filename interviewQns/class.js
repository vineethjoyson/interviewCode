class animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  statement() {
    console.log(`hello my dogs name is ${this.name} and he is ${this.age}`);
  }
}

class Dog extends animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  fntn() {
    console.log(
      `hello my dogs name is ${this.name} and he is ${this.age} and breed ${this.breed}`
    );
  }
}

let a = new Dog("dobby", 5, "Lab");
a.statement();
a.fntn();
