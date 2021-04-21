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
function printResult(num) {
    console.log('Result' + num);
}
printResult(add(5, 12));
