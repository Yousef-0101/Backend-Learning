// To export data from a node file we use
export const add = (x, y) => x + y;
export const myName = "Yousef";
export const square = (x) => x * x;

// Or As Usual Like This
/*
const add = (x, y) => x + y;
const myName = "Yousef";
const square = (x) => x * x;
module.exports = { add, myName, square };
*/

// *Or Like This
/*
const math = {
    add: add
    myName: myName
    square: square
}
module.exports = math
*/

// *Or Add Directly To Module Exports
/*
module.exports.add = (x, y) => x + y;
module.exports.myName = "Yousef";
module.exports.square = (x) => x * x;
*/
