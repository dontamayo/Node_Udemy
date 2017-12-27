
/*==========sample for object======1st part of lesson=======*/
// let obj = {
//   name: 'Don aldrich',
//   occupation: 'student',
//   married: true,
//   employed: false,
//   age: 29
// };
// let stringObj = JSON.stringify(obj); //JSON.stringify() method converts a JavaScript value to a JSON string
// console.log(typeof stringObj); //typeof operator returns a string indicating the type of the unevaluated operand.
// console.log(stringObj);

/*==========sample for object======2nd part of lesson=======*/
let personString = '{"name": "DOn", "age": 29}';
let person = JSON.parse(personString);
console.log(typeof person);
console.log(person);

const fs = require('fs');

let originalNote = {
  title: 'Some Title',
  body: 'Some Body'
};
// originalNoteString
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);        //fs.writeFileSync = file system function

let noteString = fs.readFileSync('notes.json');  // fs.readFileSync = fs function from NPM
//note
let note = JSON.parse(noteString);// parse = takes tthe string and converts it back to regulara JavaScript
console.log(typeof note);
console.log(note.title);
