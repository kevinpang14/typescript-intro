var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
// tipe data
//string
var fullName = "Kevin Pangestu";
//number
var age = 20;
//boolean
var isMarried = false;
//array
var hobbies = ["coding", "gaming", "reading"];
var numbers = [1, 2, 3, 4, 5];
var booleans = [true, false, true];
var mixed = ["Kevin Pangestu", 20, true];
var array = ["coding", "gaming", "reading"];
//any
var anything = "Kevin Pangestu";
anything = 20;
anything = true;
//null and undefined
var nullValue = null;
var undefinedValue = undefined;
// tipe data object
var person = {
    name: "Kevin Pangestu",
    age: 20,
    isMarried: false,
};
var person2 = {
    name: "Kevin Pangestu",
    age: 20,
    isMarried: false,
    behavior: function () {
        return "I'm a function";
    },
};
// tipe data khusus typescript
//tuple => strict data type and length
var persons = ["Kevin Pangestu", 20];
//enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // 0
console.log(Direction.Down); // 1
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status["Inactive"] = "INACTIVE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
console.log(Status.Active); // ACTIVE
console.log(Status.Inactive); // INACTIVE
console.log(Status.Pending); // PENDING
if (Status.Active === "ACTIVE") {
    console.log("Status is ACTIVE");
}
else if (Status.Inactive === "INACTIVE") {
    console.log("Status is INACTIVE");
}
else {
    console.log("Status is PENDING");
}
//function
//if there's a return value, then we need to define the return type
function greet(name) {
    return "Hello, ".concat(name, "!");
}
var greet2 = function (name) {
    return "Hello, ".concat(name, "!");
};
//if there's no return value, then we need to define the return type as void
function greet3(name) {
    console.log("Hello, ".concat(name, "!"));
}
function optional(name, age) {
    if (age) {
        console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
}
var point = {
    x: 10,
    y: 20,
};
// union type
// => good for multiple data type
var id;
id = "123";
id = 123;
var adminUser = {
    adminId: 1,
    name: "Kevin Pangestu",
};
// class in typescript
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("Animal makes a sound");
    };
    return Animal;
}());
var dog = new Animal("Dog");
dog.makeSound();
// inheritance
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    return Cat;
}(Animal));
// access modifier
// public => can be accessed from anywhere
// private => can only be accessed from within the class
// protected => can be accessed from within the class and its subclasses
var Human = /** @class */ (function () {
    function Human(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Human.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    Human.prototype.getAge = function () {
        return this.age;
    };
    Human.prototype.getAddress = function () {
        return this.address;
    };
    Human.prototype.getAgeAndAddress = function () {
        return "My age is ".concat(this.getAge(), " and my address is ").concat(this.getAddress());
    };
    return Human;
}());
// generics
// => good for reusable code, can be used for any type, can be used for any number of parameters and return type
function identity(arg) {
    return arg;
}
var result = identity("Hello");
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var box = new Box("Hello");
var archer = {
    name: "Robin Hood",
    age: 30,
};
// readonly => make all properties readonly
var readOnlyUser = {
    name: "John Doe",
    age: 25,
    weapon: "Bow",
};
// => pick name property from Archer type
var archerInfo = {
    name: "Robin Hood",
};
// Class Quiz
// 1.
var username1 = "Alice";
var age1 = 25;
var isAdmin1 = true;
var colors1 = ["red", "green", "blue"];
// 2.
var multiply = function (a, b) {
    return a * b;
};
var myCar = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
};
// 4.
var userId;
userId = "123";
// 5.
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    Animal1.prototype.makeSound = function () {
        console.log("Some generic sound");
    };
    return Animal1;
}());
var squirrel = new Animal1("Squirrel");
squirrel.makeSound();
// 6.
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1(name) {
        return _super.call(this, name) || this;
    }
    Dog1.prototype.makeSound = function () {
        console.log("Woof!");
    };
    return Dog1;
}(Animal1));
// 7.
var identity1 = function (arg) {
    return arg;
};
var point1 = {
    x: 10,
    y: 20,
};
// 9.
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var user2 = {
    id: 1,
    name: "John Doe",
};
console.log(user2.id);
var profileUpdate = {
    name: "John Doe",
};
// 12.
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var currentRole = Role.User;
var employeeManager = {
    name: "John Doe",
    salary: 5000,
    teamSize: 10,
};
// 14.
var person3 = {
    name: "Alice",
    age: 30,
    address: {
        city: "New York",
        street: "5th Avenue",
    },
};
var city = (_a = person3.address) === null || _a === void 0 ? void 0 : _a.city;
console.log(city);
// 15.
var calculateDiscount = function (price, discount) {
    if (discount === void 0) { discount = 10; }
    return price * ((100 - discount) / 100);
};
