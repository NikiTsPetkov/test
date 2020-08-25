// Person constructor
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Person methods
    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
    }
}
  
// Manager constructor
class Manager extends Person{
    constructor(name, age, managees) {
        super(name, age);

        this.managees = managees;
    }
    greet() {
        console.log(Person.prototype.greet.call(this) + `\nI manage ${maria.name},${pesho.name}`);
    }
}
  // Manager objects should inherit all methods from Person:
  //Manager.prototype = Object.create(Person.prototype);

// Developer constructor
class Developer extends Person{
    constructor(name, age, skillset) {
        super(name, age);

        this.skillset = skillset;
    }
    greet() {
        console.log(Person.prototype.greet.call(this) + `\nI know ${this.skillset}`);
    }
}
  // Developer objects should inherit all methods from Person:
    //Developer.prototype = Object.create(Person.prototype);
  // Developer instance
  let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
  let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
  
  // Manager instance
  let gates = new Manager('Bill Gates', 43, [maria, pesho]);
  
  // use the objects:
  maria.greet();
  pesho.greet();
  gates.greet();