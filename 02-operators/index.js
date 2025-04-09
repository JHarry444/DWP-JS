//  MAFFS:
console.log("1 + 1 =", 1 + 1);
console.log("1 - 1 =", 1 - 1);
console.log("2 * 2 =", 2 * 2);
console.log("2 / 2 =", 2 / 2);
console.log("3 ** 4 =", 3 ** 4);
console.log("10 % 3 = ", 10 % 3);


let num = 2;

console.log("Num:", num);

num = num + 1;

console.log("Num:", num);

num += 1;

console.log("Num:", num);
// increment
num++;

console.log("Num:", num);

num -= 1;

console.log("Num:", num);
// decrement
num--;

console.log("Num:", num);

num *= 3;

console.log("Num:", num);
// increment
num /= 3;

console.log("Num:", num);

//  BOOLEAN: 

console.log("1 + 1 == '2':", 1 + 1 == '2');
console.log("1 + 1 === \"2\":", 1 + 1 === '2');
console.log("1 + 1 != 2:", 1 + 1 != 2);

let num2 = 12;

console.log("Is num2 even:", num2 % 2 === 0);
console.log("Is num2 odd:", num2 % 2 !== 0);

// AND -> are both conditions true?
console.log("Is num2 even AND greater than 10:", num2 % 2 === 0 && num2 > 10);

let num3 = 4;

console.log("Is num3 even AND greater than 10:", num3 % 2 === 0 && num3 > 10);
// OR -> are EITHER conditions true?
console.log("Is num3 even OR greater than 10:", num3 % 2 === 0 || num3 > 10);
