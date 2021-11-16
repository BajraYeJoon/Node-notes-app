//Dependencies

const chalk = require("chalk");
const { describe, demandOption, string } = require("yargs");

const yargs = require("yargs");
const { removeNotes, listNotes } = require("./utils.js");
const notes = require("./utils.js");

//Add command to add note to list
yargs.command({
  command: "add",
  describe: "Add new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: "true",
      type: "string",
    },
    body: {
      describe: "Body",
      demandOption: "true",
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Remove Command to remove from the list
yargs.command({
  command: "remove",
  describe: "Remove Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

//Read Command to read the notes
yargs.command({
  command: "read",
  describe: "read note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

//List command to list all the crated note
yargs.command({
  command: "list",
  describe: "list note",
  handler() {
    console.log(chalk.yellow.inverse("Your Notes"));
    notes.listNotes();
  },
});

yargs.parse();
