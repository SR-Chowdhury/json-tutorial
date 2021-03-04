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

**Now array to Object**

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

	console.log(typeof user_JSON); // Object
	console.log(user_JSON[0].title); // Executive


**__Now receive/import JSON data from another file__**

**exportJSON-data.json**

	[
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
	    },
	    {
		"id" : 4,
		"title" : "Sr. Manager",
		"company" : "Google" 
	    },    
	    {
		"id" : 5,
		"title" : "Vice Chairman",
		"company" : "Facebook" 
	    },
	    {
		"id" : 6,
		"title" : "Chairman",
		"company" : "Youtube" 
	    }
	]

**index.js**

	let importJSON_Data = require('./exportJSON-data.json');

	console.log(typeof importJSON_Data); // Object
	console.log(importJSON_Data);

_Horra! we got Object. Here we are not using JSON.parse() method because ES6 has done for us._
