"use strict";
function greet(name) {
    if (Array.isArray(name)) {
        return name.map((n) => `Welcome, ${n}!`);
    }
    return `Welcome, ${name}!`;
}
// 单个问候语
const greeting = greet('Petter');
console.log(greeting);
// 多个问候语
const greetings = greet(['Petter', 'Tom', 'Jimmy']);
console.log(greetings);
