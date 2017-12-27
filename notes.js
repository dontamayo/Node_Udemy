console.log('starting  mylove to notes.js');

/* //====this is just a sample=====
module.exports.addNote =  () => {
console.log('addNote');
return 'New note';
};
*/
//=========== NPM Module Dependencies ======
const fs = require('fs');  // when using module, use 'const' insted of 'let' and 'var'

//====refactoring for reusablity==========
// using arrow function
// instead of creating new one alll the time we can refactor it and use it all the time
// if the notes-data.json was deleted you can use the function 'try' try = is reserved keyword

let fetchNotes = () => {
  try {
    let notesString =  fs.readFileSync('notes-data.json')
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//===this is the yargs example======
let addNote = (title, body) => {
//console.log("Adding Note", title, body); removed while studying JSON
let notes = fetchNotes();
let note = {
  title,
  body
};


//====what if theres duplicate SAME name NOTES? so we create a new variable
  let duplicateNotes = notes.filter((note) => note.title === title);  // filter = is an array method that take a callback and where using arrow function or HOF

  if (duplicateNotes.length === 0) {
    notes.push(note);  // push = lets you passed an item
    saveNotes(notes);
    return note;
  }
};
//===== if theres duplicate  ====end==

let getAll = () => {
  console.log("Getting all notes");
};

let getNote = (title) => {
  //console.log("Getting Notes", title);
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

let removeNote = (title) => {
  //console.log("Removing Note", title); // removed after exercise with 'removing notes'
  let notes = fetchNotes();//fetch the note

  //filter notes, removing the one with the title of argument
  let filteredNotes = notes.filter((note) => note.title !== title);
  // save new notes array
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

let logNote = (note) => {
  console.log('--'); //this create a couple space above my note if everything went well
  //console.log("Title: " + note.title); // this is es5 sample for concatenation
  console.log(`Title: ${note.title}`); //es6 using template literal
  console.log(`Body: ${note.body}`); //es6 using template literal
};
module.exports = {
  addNote ,          //addNote: addNote == identical to 'addNote' this is es6
  getAll ,               //getAll: getAll == identical to getAll, if you have the same name
  getNote,
  removeNote,
  logNote
};
