//4 pillars of OOP - encapsulation , inheritance , polymorphism, abstraction

//encapsulation - the process of binding the data (properties) and the methods that operate on the data into a single unit is called encapsulation. it helps to protect the data fron unauthorised access and modification.

//abstraction - the process of hinding the details and showing only the essential features of and object is called abstraction

// inheritance - the process by which one class can inherit the properties and methods of another class is called inheritance. it promotes code reuseability

//polymorphism - the ability of an obj to take many forms is called polymorphism


// class BankAccount{
//     accountNumber;
//     accountHolder;
//     #balance;


//     constructor(accountNumber ,  accountHolder){
//         this.accountNumber = accountNumber;
//         this.accountHolder = accountHolder;
//         this.#balance = 0; //we make private by using hash #  nd this variable cannot directly access outside the class but we can access it with the another function in the same class
//     }

//     deposit(amount){
//         this.#balance += amount;
//     }

//     displayBalance(){
//         console.log(`your current balanceis:${this.#balance}`)
//     }
// }

// let account1 = new BankAccount("1223444","megha");


// console.log(account1)


// account1.deposit(50000);
// account1.deposit(20000);


//methods is also a fun but not every fun is a method
// A function is a block of code that performs a task.It can exist independently (alone).A method is a function that belongs to an object or class.

// function greet(){
//    console.log("Hello");
// }

// greet();
// Here greet() is a function because it is not inside any object or class.

// let person = {
//    name: "Megha",

//    sayHello: function(){
//       console.log("Hello");
//    }
// }

// person.sayHello();
// sayHello() is a method because it is inside an object (person).



class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name} Age:${this.age}`)
    }
}

class Student extends Person { //extend keyword se hum inherit krte hai parent/derived class ki properties nd methods ko
    course;
    marks;

    constructor(name, age, course, marks) {
        super(name, age) // super calls the parent class constructor.
        this.course = course;
        this.marks = marks;
    }

    displayInfo() {
        console.log(`Name: ${this.name} Age:${this.age} , Course:${this.course}, Marks: ${this.marks}`)
    }
    //now this class display fun will run ..it overwrites the above parent class functions
}

let student = new Student("megha", 22, "bca", 22);

console.log(Student)
student.displayInfo()