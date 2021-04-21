/*
Type: Return Types
*/
/*
Return type set to number
 Best to let Typescript do it's job of infering the type
 Unless you have to specifically set it
 */
// function add(n1: number, n2: number): number {
//     return n1 + n2;
// }
function add(n1, n2) {
    return n1 + n2;
}
// 1. As nothing is returned, the return type will be set to void by Typescript anyway
// 2. However technically this would return undefined
// 3.Typescript does not allow functions to return undefined without a return like below
// function printResult(num: number): undefined {
//     console.log('Result' + num);
// }
function printResult(num) {
    console.log('Result' + num);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
