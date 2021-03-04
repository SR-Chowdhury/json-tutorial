# Javascript Object Notation (JSON)

**Use this webpack boilerpalte do the following things**

_1. run_

	npm install
_2. run_

	npm start

**Question: What is JSON & Why?**

_a. JSON is combined of array and object_

_b. Formatted String_

_c. It works with key : value pair_


**Now go to VS code**

**First Create an object**
**[N.B. An object key properties has no single/double qutation but value have]**

	let student_Obj = {
	    name: "shihan",
	    email: "shihan3star@gmail.com",
	    age: 29
	}

	console.log(student_Obj.name); // shihan
	console.log(typeof student_Obj); // Object

	let student_JSON = JSON.stringify(student_Obj);
	console.log(typeof student_JSON); // String
	
_Here student_JSON is a string; thats mean JSON is a String_

	console.log(student_JSON); // IT will show you a JSON Data
	
**Now JSON(String) to Object**

_Here we create a JSON Data (person_JSON)_

	let person_JSON = `{
	    "name" : "tanjima",
	    "email" : "shihan3star@gmail.com",
	    "age": 29
	}`
	console.log(typeof person_JSON); // string
	console.log(person_JSON.email); // undefined

_Why undefined, because person_JSON is not an object_
	
	let person_Obj = JSON.parse(person_JSON);
	console.log(typeof person_Obj); // Object
	console.log(person_Obj.age); // 29
_Now we can access age properties because person_Obj is an object now._

