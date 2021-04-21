/* 
Type: Tuple
Added by TypeScript and is a fixed-length array
*/

const person = {
    name: "Joe",
    age: 25,
    hobbies: ['Walking', 'Cars', 'Roast Dinners']
}

let favouriteActivities: string[];
favouriteActivities = ['Cars'];

console.log(person.name);

for (const hobby of person.hobbies) {
    // we can run toUpperCase as TS knows hobby is a string
    console.log(hobby.toUpperCase());


    // Will error as cant map on String
    // console.log(hobby.map) 
}

