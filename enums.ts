/* 
Type: Enum
Added by TypeScript Automatically enumerated global constant identifiers 
*/

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: "Joe",
    age: 25,
    hobbies: ['Walking', 'Cars', 'Roast Dinners'],
    role: Role.AUTHOR
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

if (person.role === Role.AUTHOR) {
    console.log('Is Author')
}