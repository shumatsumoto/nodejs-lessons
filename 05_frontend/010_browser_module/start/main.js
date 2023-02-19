// const myModule = require("./sub.js");
import isOdd from "is-odd";
import { helloFromSub } from "./sub.js";

helloFromSub();
const oddy = isOdd(3);
console.log(oddy);
