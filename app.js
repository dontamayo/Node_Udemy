// console.log('Starting my love for node app.js'); //usefull when your starting a project

/*===== const that has dependencies on NPM ======*/
const fs = require('fs'); // node modules
const  _ = require('lodash'); //  node modules
const yargs = require('yargs');


/*===== const that i created on separate folder ======*/
const notes = require('./notes.js') //creating ./ - means on the same file path.


const argv = yargs.argv; // where the library stores its version of the arguments

// this takes place in the terminal when your passing add, list, read, remove etc.
//let command = process.argv[2] // for process command

let command = argv._[0]; // to grab the first item in an array
//console.log("Command: ", command) //no longer need for the latest version
//console.log("Process", process.argv); // arguments vector, we no longer need in yargs sample
//console.log("Yargs", argv);

if (command === 'add'){
  //console.log('adding new note'); // this just an example, needs to wipe out
   let note = notes.addNote(argv.title, argv.body) ; //addNote = keeps the job done
   if (note) {
     console.log("note created");
     notes.logNote(note);
   }else {
     console.log("note title taken");
   }
}else if (command === 'list') {
  //console.log('Listing all notes'); // this just an example, needs to wipe out
  let allNotes = notes.getAll(); //getAll =return all the notes
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));  //forEach = calls a callback on each array or 'forloop'

}else if (command === 'read') {
  //console.log('Reading file');
  let note = notes.getNote(argv.title);
  if(note){
    console.log("Note found");
    notes.logNote(note);
  }else {
    console.log("note not found");
  }
}else if (command === 'remove'){
//console.log('removing file');
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}else {
  console.log('Command not reconize ');
}



//console.log(process.argv); // arguments vector
/* sample on the terminal,
node app.js list // means it list what in the notes
node app.js remove // will remove the file
node app.js add   // add a note
*/
