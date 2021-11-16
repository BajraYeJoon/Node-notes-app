const { match } = require("assert");
const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your Notes....";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const dupNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (dupNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("added"));
  } else {
    console.log("taken");
    console.log(chalk.red.inverse("taken"));
  }
};

const removeNotes = function (title) {
  const notes = loadNotes();

  const matchNotes = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > matchNotes) {
    saveNotes(matchNotes);
    console.log(chalk.green.inverse("Rremoved"));
  } else {
    console.log(chalk.red.inverse("not removed"));
  }
};

function saveNotes(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = function () {
  try {
    const data = fs.readFileSync("notes.json");
    const dataJSON = data.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNotes: removeNotes,
};
