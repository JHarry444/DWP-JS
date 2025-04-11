"use strict";

const me = {
    name: "Jordan",
    age: 31,
    specialty: "Java",
    sayHello: function () {
        console.log("Hello!");
    },
    hobbies: ["Books", "Games", "Sleeping"]
}
// me = "hello"; cannot reassign me but I can change its values


console.log("My age:", me.age);
me.age = 32;
console.log("My age:", me.age);


const cg = {
    name: "Cameron",
    age: 33,
    specialty: "Web",
    sayHello: function () {
        console.log("Yo!");
    }
}

console.log("Cameron's age:", cg["age"]);
cg["age"] = 34;
console.log("Cameron's age:", cg["age"]);

let ms = {
    name: "Shafeeq",
    age: 40,
    specialty: "Oracle"
}

ms = "hello"; // can reassign cos it's not a constant

console.log("My keys:", Object.keys(me));

debugger;
for (const shirley of Object.keys(me)) {
    console.log("Key:", shirley, "Value:", me[shirley]);
}

