// Best Practice
// import { myName, add, square } from "./math.js"; For Known Needs
import * as math from "./math.js"; // To import the whole module as an object

console.log(math);
console.log(math.myName);
console.log(math.add(2, 5));
console.log(math.square(4));

// const math = require("./math"); Legacy way

// *You Can Also Destructure It Like This
/*
const { myName, square } = require("./math");
console.log(myName);
console.log(square(4));
*/
