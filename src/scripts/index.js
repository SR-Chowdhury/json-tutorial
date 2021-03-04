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

