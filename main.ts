// tipe data
//string
const fullName: string = "Kevin Pangestu";

//number
const age: number = 20;

//boolean
const isMarried: boolean = false;

//array
const hobbies: string[] = ["coding", "gaming", "reading"];
const numbers: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true];
const mixed: (string | number | boolean)[] = ["Kevin Pangestu", 20, true];
const array: Array<string> = ["coding", "gaming", "reading"];

//any
let anything: any = "Kevin Pangestu";
anything = 20;
anything = true;

//null and undefined
const nullValue: null = null;
const undefinedValue: undefined = undefined;

// tipe data object
const person: {
  name: string;
  age: number;
  isMarried: boolean;
} = {
  name: "Kevin Pangestu",
  age: 20,
  isMarried: false,
};

interface Person {
  name: string;
  age: number;
  isMarried: boolean;
  behavior(): string;
}

const person2: Person = {
  name: "Kevin Pangestu",
  age: 20,
  isMarried: false,
  behavior() {
    return "I'm a function";
  },
};

// tipe data khusus typescript
//tuple => strict data type and length
const persons: [string, number] = ["Kevin Pangestu", 20];

//enum
enum Direction {
  Up, // 0 if not defined, return index
  Down, // 1
  Left, // 2
  Right, // 3
}

console.log(Direction.Up); // 0
console.log(Direction.Down); // 1

enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}

console.log(Status.Active); // ACTIVE
console.log(Status.Inactive); // INACTIVE
console.log(Status.Pending); // PENDING

if (Status.Active === "ACTIVE") {
  console.log("Status is ACTIVE");
} else if (Status.Inactive === "INACTIVE") {
  console.log("Status is INACTIVE");
} else {
  console.log("Status is PENDING");
}

//function

//if there's a return value, then we need to define the return type
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greet2 = (name: string): string => {
  return `Hello, ${name}!`;
};

//if there's no return value, then we need to define the return type as void
function greet3(name: string): void {
  console.log(`Hello, ${name}!`);
}

function optional(name: string, age?: number): void {
  if (age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

// type alias
// good for complex data type

type Point = {
  x: number;
  y: number;
};

const point: Point = {
  x: 10,
  y: 20,
};

// union type
// => good for multiple data type
let id: string | number;
id = "123";
id = 123;

// intersection type
// => combine multiple type into one

type Admin = {
  adminId: number;
};

type User = {
  name: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  adminId: 1,
  name: "Kevin Pangestu",
};

// class in typescript

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Animal makes a sound");
  }
}

const dog = new Animal("Dog");
dog.makeSound();

// inheritance

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
}

// access modifier
// public => can be accessed from anywhere
// private => can only be accessed from within the class
// protected => can be accessed from within the class and its subclasses

class Human {
  public name: string;
  private age: number;
  protected address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  public greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
  private getAge(): number {
    return this.age;
  }
  protected getAddress(): string {
    return this.address;
  }
  public getAgeAndAddress(): string {
    return `My age is ${this.getAge()} and my address is ${this.getAddress()}`;
  }
}

// generics
// => good for reusable code, can be used for any type, can be used for any number of parameters and return type

function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("Hello");

class Box<T> {
  private value: T;
  constructor(value: T) {
    this.value = value;
  }
  getValue(): T {
    return this.value;
  }
}

const box = new Box<string>("Hello");

// type utilities
// partial => make all properties optional

interface Archer {
  name: string;
  age: number;
  weapon: string; // optional
}

const archer: Partial<Archer> = {
  name: "Robin Hood",
  age: 30,
};

// readonly => make all properties readonly

let readOnlyUser: Readonly<Archer> = {
  name: "John Doe",
  age: 25,
  weapon: "Bow",
};

//readOnlyUser.name = "Jane Doe";
// Error: Cannot assign to 'name' because it is a read-only property.

// pick => pick properties from an object

type ArcherInfo = Pick<Archer, "name">; // string

// => pick name property from Archer type
const archerInfo: ArcherInfo = {
  name: "Robin Hood",
};

// Class Quiz

// 1.

const username1: string = "Alice";
const age1: number = 25;
const isAdmin1: boolean = true;
const colors1: string[] = ["red", "green", "blue"];

// 2.

const multiply = (a: number, b: number): number => {
  return a * b;
};

// 3.

interface Car1 {
  brand: string;
  model: string;
  year: number;
}

const myCar: Car1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
};

// 4.

let userId: string | number;
userId = "123";

// 5.

class Animal1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Some generic sound");
  }
}

const squirrel = new Animal1("Squirrel");
squirrel.makeSound();

// 6.
class Dog1 extends Animal1 {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log("Woof!");
  }
}

// 7.

const identity1 = <T>(arg: T): T => {
  return arg;
};

// 8.

type Point1 = {
  x: number;
  y: number;
};

const point1: Point1 = {
  x: 10,
  y: 20,
};

// 9.

class BankAccount {
  private balance: number;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

// 10.

interface User2 {
  readonly id: number;
  name: string;
}

const user2: User2 = {
  id: 1,
  name: "John Doe",
};

console.log(user2.id);

// 11.

interface Profile {
  name: string;
  age: number;
}

const profileUpdate: Partial<Profile> = {
  name: "John Doe",
};

// 12.

enum Role {
  Admin,
  User,
  Guest,
}

let currentRole: Role = Role.User;

// 13.

type Employee = {
  name: string;
  salary: number;
};

type Manager = {
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const employeeManager: EmployeeManager = {
  name: "John Doe",
  salary: 5000,
  teamSize: 10,
};

// 14.

const person3: {
  name: string;
  age: number;
  address?: {
    city: string;
    street: string;
  };
} = {
  name: "Alice",
  age: 30,
  address: {
    city: "New York",
    street: "5th Avenue",
  },
};

const city = person3.address?.city;
console.log(city);

// 15.

const calculateDiscount = (price: number, discount: number = 10): number => {
  return price * ((100 - discount) / 100);
};
