/* 
Type: Number
All numbers, no differentiation between integers or floats

Type: String
All text values

Type: Boolean
True or False only - no truthy or falsy values
*/

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result)
    } else {
        return n1 + n2;
    }
}

const number1 = 5;
const number2 = 2.8;

add(number1, number2, true, 'Number is:');
