/*
Type: Tuple
Added by TypeScript and is a fixed-length array
*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Joe",
    age: 25,
    hobbies: ['Walking', 'Cars', 'Roast Dinners'],
    role: Role.AUTHOR
};
var favouriteActivities;
favouriteActivities = ['Cars'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // we can run toUpperCase as TS knows hobby is a string
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('Is Author');
}
