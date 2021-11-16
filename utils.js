const { match } = require("assert");
const fs = require("fs");
const chalk = require("chalk");

//Declaration of the required functions in arrow functions
const addNote = (title, body) => {
  const notes = loadNotes();
  const dupNote = notes.find((note) => note.title === title);

  //Check if there is duplicate notes
  if (!dupNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New Note Added! 📝"));
  } else {
    console.log("taken");
    console.log(
      chalk.red.inverse("This name already exists. Pleas try another name.")
    );
  }
};

const removeNotes = (title) => {
  const notes = loadNotes();

  const matchNotes = notes.filter((note) => note.title !== title);

  //Check if notes are added and is greater than the original number of notes
  if (notes.length > matchNotes) {
    saveNotes(matchNotes);
    console.log(
      chalk.green.inverse("The note has been removed from the list ✔")
    );
  } else {
    console.log(chalk.red.inverse("There exists No Note by the given Name"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  //Loop through each note and display it
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNotes = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  //Find the notes
  if (note) {
    console.log(chalk.inverse.bold(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("There exists no any Note by the name 😥"));
  }
};

//To save the notes in JSON
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//To load the notes from the JSON
const loadNotes = () => {
  try {
    const data = fs.readFileSync("notes.json");
    const dataJSON = data.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
