// if (true) {
//     var text4 = `He's often called "Runoob"`;
//     console.log(text4); // 输出: He's often called "Runoob"
//     console.log(typeof text4); // 输出: string
//   }
//   console.log(typeof text4); // 输出: string


// myFunction();
// function myFunction() 
// {
//     var carName = "Volvo";
//     console.log("The car name is " + carName);
// }
// console.log("The car name is " + carName); // ReferenceError: carName is not defined

// myFunction();
// function myFunction() 
// {
//     let carName = "Volvo";
//     console.log("The car name is " + carName);
// }
// console.log("The car name is " + carName); //
// console.log(Date.parse()); // 1591142400000

// var add = (function () {
//     var counter = 0;
//     return function () {return counter += 1;}
// })();
// function myFunction(){
//     console.log(add()); // 1
//     console.log(add()); // 2
//     console.log(add()); // 3
// }

// myFunction();    // 1 2 3

var add = function () {
    var counter = 0;
    return function () {return counter += 1;}
};
function myFunction(){
    console.log(add()); // 1
    console.log(add()); // 2
    console.log(add()); // 3
}
myFunction();    // 1 2 37