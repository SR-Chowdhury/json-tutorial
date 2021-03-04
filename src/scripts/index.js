import '../styles/index.scss';

// Objet to String

let student_Obj = {
    name: "shihan",
    email: "shihan3star@gmail.com",
    age: 29
}

console.log(student_Obj.name); // shihan
console.log( typeof student_Obj); // Object

let student_JSON = JSON.stringify(student_Obj);

console.log(student_JSON);
console.log(typeof student_JSON); // String

// String to Object

let person_JSON = `{
    "name" : "tanjima",
    "email" : "shihan3star@gmail.com",
    "age": 29
}`

console.log(person_JSON.email); // undefined
console.log(typeof person_JSON); // string

let person_Obj = JSON.parse(person_JSON);

console.log(person_Obj.age);
console.log(typeof person_Obj);


// Now JSON array to Object

let user_Array = `[
    {
        "id" : 1,
        "title" : "Executive",
        "company" : "Google" 
    },    
    {
        "id" : 2,
        "title" : "Sr. Executive",
        "company" : "Facebook" 
    },
    {
        "id" : 3,
        "title" : "Manager",
        "company" : "Youtube" 
    }
]`

console.log(typeof user_Array); //String

let user_JSON = JSON.parse(user_Array);

console.log(typeof user_JSON);
console.log(user_JSON[0].title);


// Now receive/import JSON data from another file

let importJSON_Data = require('./exportJSON-data.json');

console.log(typeof importJSON_Data); // Object
console.log(importJSON_Data);



