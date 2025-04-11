"use strict";


const topics = ["Intro", "tpes", "Conditionals", "Loops", "Arrays"];

const arr = ["gdgdg", 213143, true, { name: "barry", age: 27 }];

console.log("First topic:", topics[0]);

topics[5] = "Functions";

console.log("Topics:", topics);

topics[1] = "Topics";

console.log("Topics:", topics);

// adds an element at the end of the array
topics.push("Maps");

console.log("Topics:", topics);

// removes the last element from the array
topics.pop();

console.log("Topics:", topics);

// removes 1 element starting from position 3
topics.splice(3, 1);

console.log("Topics:", topics);
